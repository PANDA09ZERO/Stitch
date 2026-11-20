# Prompt para Claude — Terminar "Stitch Maze Chase"

Copia y pega todo el bloque siguiente en Claude:

---

## CONTEXTO

Vas a continuar y terminar un juego web educativo tipo Pac-Man llamado **Stitch Maze Chase**, tema Lilo & Stitch, estilo retro-y2k. El proyecto está en:

```
C:\Users\P_A_N\Desktop\ejercicios\io\ari\juego_stitch
```

El juego es **un único archivo** `index.html` con HTML + CSS + JS ES6 vanilla + Canvas. Sin frameworks, sin dependencias pesadas, listo para subir a Vercel. NO dividas el archivo. No instales librerías.

Antes de tocar nada, **lee** estos documentos que ya están en el proyecto (están en español y contienen todo el diseño):

- `INDICE.md` → índice de los 26 documentos
- `DISEÑO_PERSONAJES.md` → resumen de diseño
- `PROMPT_PARA_CLAUDE.md` → este archivo
- Las carpetas `personajes/`, `power-ups/`, `objetos/`, `sistema/`, `niveles/` → cada una tiene un `PERFIL.md` con habilidades, fortalezas, debilidades, funcionamiento técnico y pendientes.

---

## LO QUE YA ESTÁ HECHO (NO LO REHAGAS)

- ✅ Laberinto en Canvas con 6 niveles: Playa, Casa, Nave, Luau Nocturno, Estación Espacial, Jefe Final.
- ✅ 3 personajes jugables: Stitch, Angel (+15 % velocidad), Lilo (hitbox −15 %).
- ✅ 4 enemigos con IA distinta: Gantu (persigue a 9 casillas), Jumba (va a la zona correcta), Pleakley (aleatorio), Reuben (persigue 55 % del tiempo).
- ✅ Jefe "Gran Consejo" con 3 fases (aura morado → rojo → dorado, cada vez más rápido).
- ✅ Modo Supervivencia infinito: oleadas, dificultad `1+(wave-1)*0.15`, jefe cada 5 oleadas.
- ✅ 310 preguntas de **vocabulario inglés → español** (NO sobre Stitch), con baraja `questionDeck` + `usedQuestions` para no repetir hasta agotar el banco.
- ✅ 11 skins de Stitch seleccionables con imágenes reales de `personajes/buenos/stitch/`: clásico, Elvis, hula, surfer, genio, serio, espanto, jajaja, molesto, uir, ups. Cada skin modifica velocidad/hitbox.
- ✅ Fichas de habilidad/fortalezas/debilidades visibles en la selección (`CHAR_PROFILES`, `SKIN_PROFILES`).
- ✅ Power-ups: café (velocidad ×1.6 / 5 s) y ukelele (atura a todos 3 s).
- ✅ Llave `K` → puerta `X`, portales `T` por parejas, zonas de respuesta A/B/C/D.
- ✅ 5 vidas, temporizador, puntuación con récord en `localStorage['smc_best']`.
- ✅ Web Audio API con `beep()`, efectos y botón mute.
- ✅ Teclado (flechas/WASD) con buffer de esquina, D-Pad táctil y swipe. Detección táctil con `('ontouchstart' in window) || (navigator.maxTouchPoints > 0)`. `touch-action:none`.
- ✅ Sistema de animaciones: rebote/squash al caminar, emotes con las imágenes de expresión (`EMOTES`, `playAnim()`, `drawPlayerAnimated()`) y partículas.
- ✅ `PIXEL_MODE = false` (true = sprites procedurales de respaldo).
- ✅ 100dvh, sin scroll, responsive.

---

## PROBLEMA ACTUAL IMPORTANTE

Las **10 imágenes base originales ya no existen en disco** y dan 404 en el servidor:

```
image-removebg-preview.png
image-removebg-preview (1).png ... (9).png
```

Antes estaban en la raíz y estaban mapeadas en `ASSET_MAP` como:
`stitch`, `angel`, `lilo`, `gantu`, `jumba`, `pleakley`, `reuben`, `coffee`, `ukelele`, `boss`.

El juego **sigue funcionando** porque hay dibujo procedural de fallback, pero:
- Las imágenes de las 10 skins de Stitch SÍ existen y cargan bien en `personajes/buenos/stitch/`.
- El fondo SÍ existe en `personajes/buenos/stitch/summer_lilostitch_elvis_89aee099.jpeg` y ya está corregido en `ASSET_MAP.background`.

**Tu primera tarea es preguntar al usuario dónde están esas imágenes o si quiere que las regeneres.** No las elimines ni las sobrescribas sin permiso. Si las encuentra, actualiza las rutas en `ASSET_MAP`.

---

## TAREAS PENDIENTES (en orden de prioridad)

### Prioridad ALTA
1. **Imágenes base**: localizar o regenerar las 10 imágenes faltantes y corregir `ASSET_MAP`.
2. **Confirmar `uir.png`**: preguntar al usuario qué expresión muestra y completar su perfil en `personajes/buenos/stitch/PERFIL.md` y en `SKIN_PROFILES`.
3. **Llenar las carpetas vacías** de `personajes/buenos/angel/`, `personajes/buenos/lilo/`, `personajes/enemigos/*` y `power-ups/*` con el arte que el usuario vaya dando. Cada carpeta ya tiene su `PERFIL.md` listo.
4. **Animación de carrera real**: crear 4 frames (`run1.png`…`run4.png`) para Stitch o, si no hay imágenes, mejorar el rebote actual. El ejemplo de código está en `sistema/animaciones/PERFIL.md`.
5. **Emotes para Angel y Lilo** (ahora solo funcionan para Stitch).

### Prioridad MEDIA
6. **Llave especial de Lilo**: implementar en la lógica de puertas (ella puede abrir `X` sin llave `K`).
7. **Animación de entrada/salida en portales** (fundido/scale).
8. **Barra de tiempo** visual y alerta cuando quedan <10 s.
9. **Número de oleada grande** en pantalla durante Supervivencia.
10. **Música de fondo** por nivel y persistir preferencia de mute en `localStorage`.
11. **Top 5 de récord local** en `localStorage`.

### Prioridad BAJA (mejoras opcionales)
12. Bonus de puntuación por skin usada y por nivel sin recibir golpes.
13. Categoría de gramática/frases al banco de preguntas.
14. Dificultad progresiva de vocabulario (palabras más largas en niveles avanzados).
15. Un nivel extra (desierto o volcán) con nuevo theme.
16. Soporte para gamepad.
17. Ajustar sensibilidad del swipe según tamaño de pantalla.
18. Destinos de portal configurables por nivel.
19. Corregir el 404 de `favicon.ico` (poner un `<link rel="icon" ...>` con un data URI).

---

## RESTRICCIONES TÉCNICAS

- Seguir siendo **un solo `index.html`**. No crear módulos JS separados.
- No usar frameworks ni librerías externas excepto la fuente de Google Fonts `Press Start 2P` (ya incluida).
- Mantener `100dvh`, `overflow:hidden`, sin scroll.
- Mantener la detección táctil y los tres esquemas de control.
- Mantener el sistema de preguntas sin repeticiones.
- Todo el texto de la UI en español.
- Respetar el estilo del código existente (nombres en camelCase, comentarios en español, secciones con `// =====`).
- Al terminar cada cambio, **probar en navegador**: levantar `python -m http.server 8765` en la carpeta del proyecto y abrir `http://localhost:8765/index.html`. Importante: `requestAnimationFrame` no avanza en segundo plano, así que para pruebas deterministas llama a `update(16)` manualmente desde la consola/evaluación de página.
- Verificar que no haya errores de consola (los 404 de imágenes base son conocidos hasta que se arreglen).

---

## CÓMO EMPEZAR

1. Lee `INDICE.md` y los `PERFIL.md` de las carpetas.
2. Confirma con el usuario el punto de las imágenes base y el significado de `uir.png`.
3. Trabaja las tareas en el orden de prioridad indicado.
4. Después de cada cambio importante, actualiza el `PERFIL.md` correspondiente y este `PROMPT_PARA_CLAUDE.md` tachando lo completado.
5. Al final, dime qué hiciste, qué queda pendiente y cómo probarlo.

---

## NOTA SOBRE EL USUARIO

El usuario escribe en español, quiere el juego terminado y jugable, y valora mucho que:
- las preguntas sean de inglés y no se repitan,
- los personajes/skins tengan habilidades, fortalezas y debilidades bien definidas,
- se usen sus imágenes descargadas,
- todo quede documentado en MD dentro de cada carpeta.

Responde siempre en español. Sé concreto y muestra el resultado de las pruebas.
