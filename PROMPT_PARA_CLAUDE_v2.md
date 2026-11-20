# Prompt para Claude (v2): terminar "Stitch Maze Chase"

Copia el bloque siguiente en una sesión nueva de Claude Code abierta en la carpeta del proyecto.

---

Vas a terminar "Stitch Maze Chase", un juego web educativo tipo laberinto/persecución
(tema Lilo & Stitch, estética retro-y2k) que enseña vocabulario inglés → español.
Responde siempre en español.

## Contexto del proyecto
- Carpeta: `C:\Users\P_A_N\Desktop\ejercicios\io\ari\juego_stitch`
- Todo el juego está en UN solo `index.html` (HTML + CSS + JS ES6 vanilla + Canvas).
  Se despliega estático en Vercel. No lo dividas en módulos ni añadas frameworks
  (la única dependencia externa permitida es la fuente "Press Start 2P").
- Documentación de diseño: `INDICE.md`, `DISEÑO_PERSONAJES.md` y un `PERFIL.md` por
  carpeta (`personajes/`, `power-ups/`, `objetos/`, `sistema/`, `niveles/`).
  Léelos antes de cambiar algo relacionado; son la especificación de cada pieza.
- No confíes ciegamente en este prompt ni en los MD: si el código dice otra cosa,
  manda el código. Contrasta antes de asumir que algo "ya está hecho".

## Estado real (verificado el 2026-11-19)
Funciona: 6 niveles, 3 jugables (Stitch, Angel, Lilo), 4 enemigos con IA distinta,
jefe de 3 fases, modo Supervivencia, 310 preguntas sin repetición (`questionDeck` +
`usedQuestions`), skins de Stitch que cambian velocidad/hitbox, café y ukelele, llave,
puertas, portales, zonas A/B/C/D, 5 vidas, récord en `localStorage['smc_best']`,
audio Web Audio con mute, teclado/D-Pad/swipe, emotes y partículas, 100dvh sin scroll.

Problemas conocidos:
1. **Imágenes base faltantes.** `ASSET_MAP` apunta a 10 archivos
   `image-removebg-preview*.png` que no existen (404). Afecta a: stitch, angel, lilo,
   gantu, jumba, pleakley, reuben, coffee, ukelele, boss. El juego usa dibujo
   procedural de respaldo. La carpeta `assets/` está vacía.
2. **La skin "Clásico" no tiene imagen propia**: depende de la imagen base de Stitch
   que falta. Solo hay 10 PNG de skins en `personajes/buenos/stitch/`, no 11.
3. **Las habilidades de las fichas son solo texto.** `SKIN_PROFILES` y `CHAR_PROFILES`
   describen habilidades (Elvis absorbe el primer golpe, Genio da más tiempo,
   Espanto ahuyenta, Molesto intimida, Jajaja acelera al acertar, Surfer/Hula con
   bonus por nivel, canto de Angel, llave de Lilo...) que **no están implementadas**;
   las skins solo modifican `speed` y `hitbox`.
4. `uir.png`: no se sabe qué expresión muestra; su perfil está como "Por confirmar".
5. Emotes (`EMOTES`) solo existen para Stitch.
6. 404 de `favicon.ico`.

## Qué puedes y qué no puedes hacer con el arte
- No generes ni "regeneres" imágenes PNG de personajes de Disney: no tienes cómo, y
  el arte lo aporta el usuario. Si falta una imagen, el respaldo es el dibujo
  procedural que ya existe.
- Sí puedes: reubicar/renombrar rutas en `ASSET_MAP` cuando el usuario te dé los
  archivos, animar por código (squash, rebote, inclinación, recortes de una misma
  imagen) y dibujar elementos procedurales nuevos en Canvas.
- Convención para arte nuevo: cada imagen va en la carpeta de su ficha
  (p. ej. `personajes/enemigos/Gantu/gantu.png`, `power-ups/cafe/cafe.png`).
  No borres ni sobrescribas imágenes sin permiso.

## Primer paso: una sola ronda de preguntas
Antes de programar, hazme estas preguntas juntas (una vez) y sigue trabajando en lo
que no dependa de las respuestas mientras tanto:
- ¿Tienes las 10 imágenes base? Si sí, ¿dónde? (Si no, se queda el procedural.)
- ¿Qué expresión muestra `uir.png`? (Puedes abrir la imagen y proponerme una.)
- ¿Implemento las habilidades de skins/personajes tal como dicen las fichas, o
  prefieres ajustarlas antes?

## Tareas, por fases
Haz una fase completa, pruébala y repórtame antes de pasar a la siguiente.

**Fase 1 — Arreglos y coherencia**
1. Limpiar `ASSET_MAP`: rutas a las imágenes que el usuario indique (o dejar las
   faltantes como `null` para que no generen 404 y se use el procedural).
2. Favicon con `<link rel="icon">` en data URI.
3. Completar el perfil de `uir` (código y `personajes/buenos/stitch/PERFIL.md`).
4. Dar a "Clásico" un aspecto válido (procedural o imagen que indique el usuario).

**Fase 2 — Habilidades reales** (el núcleo de lo que valora el usuario)
5. Implementar cada habilidad de `SKIN_PROFILES` y `CHAR_PROFILES` con números
   concretos y equilibrados; que coincidan exactamente con lo que muestran las
   fichas en la selección. Incluye la llave especial de Lilo (abrir puertas X sin
   llave K) y el canto de Angel (aturdimiento con enfriamiento visible en el HUD).
6. Emotes para Angel y Lilo (procedurales hasta que haya arte).

**Fase 3 — Pulido de juego**
7. Barra de tiempo visual y alerta a < 10 s.
8. Número de oleada grande al empezar cada oleada en Supervivencia.
9. Animación de entrada/salida en portales (fundido + escala).
10. Animación de carrera mejorada por código (sin nuevos PNG).
11. Persistir mute en `localStorage` y Top 5 de puntuaciones local.
12. Música de fondo sencilla por nivel con Web Audio (sin archivos de audio).

**Fase 4 — Opcional (solo si te lo pido)**
Bonus por nivel sin golpes, categoría de gramática/frases, dificultad progresiva de
vocabulario, nivel extra (desierto o volcán), gamepad, sensibilidad del swipe según
pantalla, destinos de portal por nivel.

## Reglas de código
- camelCase, comentarios en español, secciones con `// ===== NOMBRE =====`.
- Toda la UI en español; las preguntas siguen siendo de vocabulario inglés.
- No romper: 100dvh + `overflow:hidden`, detección táctil, los tres esquemas de
  control, el sistema de preguntas sin repetición, el récord existente.
- Cambios pequeños y localizados con edición puntual; no reescribas el archivo entero.

## Cómo probar (obligatorio tras cada fase)
- Servidor: `python -m http.server 8765` en la carpeta del proyecto, y abre
  `http://localhost:8765/index.html` en el navegador integrado.
- `requestAnimationFrame` se detiene en segundo plano: para pruebas deterministas,
  llama a `update(16)` en bucle desde la evaluación JS de la página y comprueba el
  estado (posición del jugador, `stun`, `invuln`, vidas, puntuación...).
- Cero errores en consola y cero 404 (salvo imágenes que el usuario aún no haya dado,
  si decidiste mantener su ruta).
- Prueba al menos: un nivel completo, una muerte, una pregunta acertada y una fallada,
  cada habilidad nueva, y la vista móvil (375×812) con D-Pad.
- Haz una captura de pantalla de cada cambio visual.

## Documentación
- Tras cada cambio, actualiza el `PERFIL.md` de la pieza afectada (quita lo que pase
  de "pendiente" a hecho) y, si cambian números, `DISEÑO_PERSONAJES.md`.
- Lleva un `PENDIENTES.md` en la raíz con las tareas de este prompt marcadas
  `[x]` / `[ ]`.

## Informe al terminar cada fase
- Qué cambiaste (con `archivo:línea`).
- Resultado de las pruebas: qué probaste, qué salió, errores de consola.
- Qué queda pendiente y qué necesitas de mí (arte, decisiones).
