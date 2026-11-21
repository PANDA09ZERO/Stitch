# ✅ Pendientes — Stitch Game

Tareas de `PROMPT_PARA_CLAUDE_v2.md`. Marca `[x]` al completar.

## Fase 1 — Arreglos y coherencia
- [x] Limpiar `ASSET_MAP`: las 10 imágenes base que faltan quedan en `null` (sin 404, se usa el dibujo procedural). Cada línea lleva la ruta sugerida.
- [x] Favicon con `<link rel="icon">` en data URI (SVG).
- [x] Perfil de `uir.png` → skin **¡Huir!** (Escapista), en el código y en los MD.
- [x] Skin "Clásico" con un aspecto válido (procedural, `drawStitch()`).
- [ ] **Necesita al usuario:** aportar las imágenes base (Stitch clásico, Angel, Lilo, Gantu, Jumba, Pleakley, Reuben, café, ukelele, jefe).

## Fase 2 — Habilidades reales
- [x] Implementar las 11 habilidades de skins (sección `// ===== HABILIDADES =====`, números en `AB`). Las fichas muestran ahora los números exactos.
- [x] Canto de Angel (automático, aturde 1,5 s, enfriamiento 12 s) y vudú de Lilo (1 puerta X por nivel sin llave; velocidad 0,92).
- [x] Emotes para Angel y Lilo (burbuja con emoji) y textos flotantes al activar una habilidad.
- [x] Estado de habilidades y enfriamientos en el HUD.
- [x] Corregido: las partículas salían desplazadas (faltaba `offX/offY`).
- [ ] **Necesita al usuario:** probar a mano el equilibrio (porcentajes y enfriamientos) y decir si algo resulta demasiado fuerte o débil.

## Fase 3 — Pulido de juego
- [x] Barra de tiempo y alerta a < 10 s.
- [x] Número de oleada grande en Supervivencia (y cartel "NIVEL N" en modo normal).
- [x] Animación al entrar y salir de los portales.
- [x] Animación de carrera mejorada por código.
- [x] Guardar el estado de mute y un Top 5 local.
- [x] Música de fondo por nivel (Web Audio).
- [x] Corregido: el HUD decía "Nivel Ola 1" en Supervivencia.
- [ ] **Necesita al usuario:** escuchar la música y decir si gusta o si conviene bajar el volumen o añadir un botón aparte para la música.

## Fase 4 — Opcional
- [x] Bonus de +500 por nivel u oleada sin golpes.
- [x] Frases (36) y gramática (41): el banco pasa de 310 a 387 preguntas.
- [x] Dificultad progresiva de las preguntas por nivel y por oleada.
- [x] Nivel extra Volcán Kīlauea (lava, música propia, portales en ciclo).
- [x] Soporte para mando (gamepad).
- [x] Swipe adaptado al tamaño de pantalla y encadenable.
- [x] Destinos de portal configurables por nivel (`portalTo`).
- [x] Corregido: en Supervivencia la Estación Espacial nunca aparecía.
- [ ] Sin hacer (no estaba en el prompt v2): bonus de puntos por skin usada.

## Pedido por el usuario
- [x] Volver al menú: desde el menú de pausa y desde las pantallas de fin de nivel y fin de partida.
- [x] Pasar al siguiente nivel u oleada desde el menú de pausa (y reiniciar el nivel).
- [x] Selector de nivel en la pantalla de inicio, con ✓ en los niveles superados.
- [x] Nuevo estilo visual («recreativa tiki») y auditoría de accesibilidad con 8 correcciones (ver `sistema/estilo/PERFIL.md`).
- [x] Corregido: las zonas A/B/C/D revelaban la respuesta correcta con el color.
- [ ] Probar con un lector de pantalla real (NVDA o VoiceOver).
- [x] Emojis sustituidos por iconos pixel-art propios (interfaz y laberinto).
- [x] Respuestas legibles en móvil: leyenda A/B/C/D bajo la pregunta; en casillas pequeñas, solo la letra.
- [x] Instalable en el móvil (PWA) y jugable sin conexión (ver `sistema/instalacion/PERFIL.md`).
- [ ] Probar la instalación en un teléfono real tras publicar en Vercel.
- [x] Pausa de lectura de 3-6 s con cada pregunta nueva (ver `sistema/tiempo/PERFIL.md`).

## Observado durante las pruebas
- [x] En móvil en vertical (375×812) el laberinto ocupaba poco más de un tercio de la altura. Ahora se gira cuando da casillas más grandes: 17 px → 23 px, ocupa el 78 % del área de juego (ver `niveles/PERFIL.md`).
- [x] Móvil en horizontal (812×375): la pregunta y el D-Pad pasan a una columna lateral; casillas de 17 px → 25 px.
- [x] Girar el móvil a mitad de nivel reorienta el laberinto en vivo, sin perder la partida.
