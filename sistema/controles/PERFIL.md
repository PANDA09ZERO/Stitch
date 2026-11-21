# 🎮 Controles — Teclado, Joystick táctil y Mando

**Carpeta:** `sistema/controles/`
**Tipo:** Entrada del jugador
**Detección táctil:** `('ontouchstart' in window) || (navigator.maxTouchPoints > 0)`

---

## Ficha

| Campo | Detalle |
|---|---|
| **PC** | Flechas ↑↓←→ / WASD |
| **Móvil** | Joystick flotante semitransparente: aparece donde se toca el laberinto y se maneja arrastrando (sin botones fijos, para dejar más sitio al laberinto) |
| **Buffer de esquina** | `nextDir` guarda la dirección pulsada y se aplica al llegar a una intersección |
| **CSS táctil** | `touch-action:none` en el canvas y `overscroll-behavior:none`; además `touchmove` bloquea el arrastre de la página fuera de los menús (en iPhone, Safari si no se "comía" los deslizamientos) |
| **Pausa** | Botón ⏸️ en el HUD, tecla **P** o **Esc**, o **Start** en el mando: abre el menú de pausa |

---

## Funcionamiento técnico

- `player.dir` = dirección actual; `player.nextDir` = dirección solicitada.
- Teclado, swipe y mando escriben en `nextDir`.
- `moveEntity(obj,dt)` mueve por **carriles**: el personaje va siempre por el centro del pasillo. Si en un fotograma va a cruzar el centro de una casilla, se coloca justo en él y ahí gira (si `nextDir` está libre), sigue o se para ante un muro. La media vuelta se permite en cualquier momento. Antes el giro exigía estar a < 2 px del centro y, con algunos tamaños de pantalla (sobre todo iPhone, cuya barra de Safari cambia el alto), el personaje se paraba fuera de ese margen y quedaba bloqueado.
- La velocidad se multiplica por `dt/16.67`, así va igual en pantallas de 60 Hz y 120 Hz.
- **Joystick táctil** (`// ===== JOYSTICK TÁCTIL =====`): en `touchstart` se coloca la base (`#joy`) bajo el dedo; en `touchmove` el mando (`#joyKnob`) sigue al dedo hasta `JOY_R` (42 px) y, pasada la zona muerta `JOY_DEAD` (9 px), el eje dominante (con 15 % de margen para que no tiemble en diagonal) da la dirección. Si el dedo se aleja más de `JOY_R`, la base lo persigue, así la media vuelta es inmediata. Se sigue un solo dedo (`identifier`); `touchend`/`touchcancel` lo ocultan.
- Mientras el joystick está inclinado, `update()` vuelve a pedir su dirección en cada fotograma: el personaje gira solo en el siguiente cruce libre sin tener que volver a deslizar.
- **Giro con margen** (solo el jugador): si se pide un giro hasta 1/3 de casilla después de pasar el centro de un cruce, el personaje vuelve al centro y gira, para que el control no se sienta "desfasado".
- En móvil en horizontal la pregunta va en una columna lateral a la derecha (ver `niveles/PERFIL.md`).

---

## Diseño de balance

- **Fortalezas:** Responde bien tanto en teclado como en pantalla táctil; el buffer de esquina evita perder giros.
- **Debilidades:** El joystick tapa un poco el laberinto bajo el dedo.
- **Consejo:** En móvil, deja el dedo apoyado e inclina el joystick hacia donde quieres girar antes de llegar al cruce: el giro se hace solo al llegar.

---

## Menú de pausa y navegación

Al pausar se abre un menú (`#pauseOverlay`, sección `// ===== MENÚ DE PAUSA / NAVEGACIÓN =====`) que muestra el nivel u oleada actual y la puntuación:

| Opción | Qué hace |
|---|---|
| ▶️ **Continuar** | Cierra el menú y sigue la partida (también P, Esc o A en el mando) |
| ⏭️ **Siguiente nivel / oleada** | Salta al siguiente nivel (u oleada en Supervivencia). Conserva los puntos ganados, pero no da bonus de nivel. Desactivado en el último nivel: para terminar el juego hay que vencer al jefe |
| 🔄 **Reiniciar nivel** | Vuelve a empezar el nivel con preguntas nuevas; se pierden los puntos ganados en ese nivel (`levelStartScore`) para que no se pueda acumular puntos repitiéndolo |
| 🏠 **Volver al menú** | Abandona la partida y vuelve a la pantalla de inicio. No guarda la puntuación en el Top 5 |

Las pantallas de **fin de nivel** y **fin de partida** también tienen un botón 🏠 **Menú**.

## Pendiente

- [x] Mando (Gamepad API, `pollGamepad()` en cada frame): cruceta o stick izquierdo (zona muerta 0,5) para moverse, **Start** pausa/reanuda y **A** pulsa el botón principal de la pantalla visible (empezar, siguiente nivel, jugar de nuevo). Al conectarlo, la ayuda lo indica.
- [x] Swipe adaptativo: distancia mínima = 5 % del lado corto de la pantalla, entre 14 y 40 px (`swipeThreshold()`). Se reconoce ya durante el movimiento (`touchmove`), así se pueden encadenar giros sin levantar el dedo.
