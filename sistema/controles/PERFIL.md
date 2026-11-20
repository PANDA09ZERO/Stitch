# 🎮 Controles — Teclado, D-Pad y Swipe

**Carpeta:** `sistema/controles/`
**Tipo:** Entrada del jugador
**Detección táctil:** `('ontouchstart' in window) || (navigator.maxTouchPoints > 0)`

---

## Ficha

| Campo | Detalle |
|---|---|
| **PC** | Flechas ↑↓←→ / WASD |
| **Móvil** | D-Pad en pantalla o gesto de swipe |
| **Buffer de esquina** | `nextDir` guarda la dirección pulsada y se aplica al llegar a una intersección |
| **CSS táctil** | `touch-action:none` en el canvas para evitar scroll |
| **Configuración** | Checkbox "Controles táctiles" (Auto / On / Off) en la pantalla de inicio |
| **Pausa** | Botón ⏸️ en el HUD, tecla **P** o **Esc**, o **Start** en el mando: abre el menú de pausa |

---

## Funcionamiento técnico

- `player.dir` = dirección actual; `player.nextDir` = dirección solicitada.
- Los eventos de teclado y D-Pad escriben en `nextDir`.
- `moveEntity()` aplica `nextDir` cuando el jugador está centrado en una casilla y no hay muro.
- El swipe registra `swipeStart` en `touchstart` y calcula la dirección en `touchend`.
- `applyTouchUI()` muestra/oculta el D-Pad según `touchEnabled`.
- En móvil en horizontal (pantallas apaisadas de ≤ 520 px de alto) el D-Pad y la pregunta van en una columna lateral a la derecha, con botones de 48 px, para no quitar altura al laberinto (ver `niveles/PERFIL.md`).

---

## Diseño de balance

- **Fortalezas:** Responde bien tanto en teclado como en pantalla táctil; el buffer de esquina evita perder giros.
- **Debilidades:** El swipe puede ser impreciso en pantallas pequeñas; el D-Pad ocupa espacio.
- **Consejo:** En móvil usa el D-Pad para mayor precisión en los laberintos ajustados.

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
