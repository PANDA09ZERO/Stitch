# 🎨 Estilo visual y accesibilidad

**Carpeta:** `sistema/estilo/`
**Concepto:** *Recreativa tiki en la Federación Galáctica*: noche tropical de Kauai más una máquina recreativa con bordes de tinta y sombras duras.
**Código:** bloque `<style>` de `index.html` (variables en `:root`)

---

## Paleta

| Nombre | Hex | Uso |
|---|---|---|
| Noche | `#10123a` | Fondo general y de las ventanas |
| Noche 2 | `#1b1f5e` | Paneles (HUD, panel inferior, tarjetas) |
| Laguna | `#2de2e6` | Bordes, etiquetas, botón secundario, D-Pad |
| Hibisco | `#ff3d7f` | Relieve del título, botón de salir, alerta de tiempo |
| Mango | `#ffb627` | Acción principal, selección y foco del teclado |
| Arena | `#fff1d0` | Texto |
| Tinta | `#070821` | Contornos y sombras duras |
| Hoja | `#3ddc84` | Aciertos, barra de tiempo, fortalezas |

## Tipografía

- **Press Start 2P**: título, encabezados de paso, botones, números del HUD y nombres de personaje.
- **Fuente del sistema** (`system-ui`): texto largo (fichas, descripciones, preguntas) para que se lea bien. Se mantiene la regla del proyecto de no añadir más fuentes externas.

## Piezas

- **Título (el elemento estrella):** «Stitch» en mango con relieve escalonado de hibisco y tinta, «Game» en laguna, y una franja de olas pixeladas animada. Es la única animación decorativa.
- **Pasos numerados:** los encabezados del menú (personaje, estilo, dónde empezar) se numeran solos con un contador CSS que solo cuenta los pasos visibles (con Angel o Lilo no aparece «estilo» y la numeración sigue siendo 1, 2).
- **Barra de acciones fija:** «¡Comenzar aventura!» y «Supervivencia» quedan siempre visibles al pie del menú.
- **Botones de recreativa:** borde de tinta, esquinas de 4 px y sombra dura que se hunde al pulsar.
- **Tarjetas:** sombra dura desplazada; la seleccionada se levanta y se marca en mango.
- **Barra de tiempo segmentada** como las de las recreativas.
- **Zonas A/B/C/D:** placa oscura con borde del color del nivel. **Todas iguales**: antes la correcta salía en verde y las incorrectas en rojo, así que se veía la respuesta sin leerla.

---

## Iconos pixel-art (sin emojis)

Todos los emojis se sustituyeron por iconos propios de 8×8 píxeles con la paleta del juego (los emojis se ven distinto en cada móvil y rompían el estilo). Sección `// ===== ICONOS PIXEL-ART =====` de `index.html`:

- `PX_ICONS`: cada icono son 8 filas de 8 letras; cada letra es un color de `PX_COLORS` y `.` es transparente.
- `ic(nombre, color?)` devuelve un `<svg>` para la interfaz; con `color` se pinta de un solo color (p. ej. tinta sobre botones).
- `drawPxIcon(ctx, nombre, x, y, tamaño)` lo dibuja en el canvas (emotes, textos flotantes, portal, aturdimiento, cartel).
- En el HTML basta con `<span data-icon="nombre"></span>`; `hydrateIcons()` lo rellena al arrancar.
- Las flechas del D-Pad se generan girando la flecha hacia arriba.

Iconos: estrella, corazón, reloj, pausa, reproducir, sonido, silencio, flechas, infinito, siguiente, reiniciar, casa, trofeo, calavera, medallas 1-3, iconos de nivel (palmera, casa, cohete, flor, satélite, volcán, corona), categorías (libro, bocadillo, lápiz), caras de emote (feliz, golpe, enfado, sorpresa, gafas), nota, ráfaga, grito, escudo, diana, varita, cerebro, llave, café, ukelele, destello, espiral, mando, móvil, monitor, visto, descarga y mapa.

## Respuestas legibles en móvil

En el móvil las casillas miden ~20-24 px y el texto de las respuestas dentro de las zonas quedaba en ~5 px, ilegible. Ahora:

- Bajo la pregunta hay una **leyenda de respuestas** (`#answers`, `renderAnswers()`): A, B, C y D con su texto a 14-17 px, en 2 columnas (1 columna en la barra lateral del móvil en horizontal).
- Si la casilla mide menos de 48 px (`ZONE_TEXT_MIN_TS`), la zona del laberinto muestra solo su letra, grande. En casillas grandes sigue mostrando también el texto.
- En pantallas estrechas se ocultan las líneas de ayuda para dejar sitio.

---

## Auditoría de accesibilidad (WCAG 2.1 AA)

Hecha con la skill `design:accessibility-review` y medida en el navegador.

### Contraste
| Elemento | Texto | Fondo | Ratio | Requerido | |
|---|---|---|---|---|---|
| Texto | `#fff1d0` | `#10123a` | 16,0:1 | 4,5:1 | ✅ |
| Texto secundario | `#b9bde8` | `#1b1f5e` | 8,2:1 | 4,5:1 | ✅ |
| Botón mango | `#070821` | `#ffb627` | 11,2:1 | 4,5:1 | ✅ |
| Botón laguna | `#070821` | `#2de2e6` | 12,3:1 | 4,5:1 | ✅ |
| Botón hibisco | `#070821` | `#ff3d7f` | 5,6:1 | 4,5:1 | ✅ (antes texto arena: 3,0:1 ❌) |
| Fortalezas / debilidades | `#3ddc84` / `#ff8fb1` | `#070821` | 11,0 / 9,2:1 | 4,5:1 | ✅ |
| Texto de las zonas | `#fff1d0` | placa `#070821` | 17,1:1 | 4,5:1 | ✅ |

### Problemas encontrados y corregidos
| # | Problema | Criterio | Corrección |
|---|---|---|---|
| 1 | Texto claro sobre hibisco (botón de salir, número de paso, alerta) a 3,0:1 | 1.4.3 | Texto en tinta: 5,6:1 |
| 2 | Las tarjetas de personaje eran `div` y no se podían elegir con el teclado | 2.1.1 | Ahora son `button` con `aria-pressed`; el foco se mantiene tras elegir |
| 3 | 6 botones sin nombre (pausa, sonido, flechas del D-Pad) | 4.1.2 | `aria-label`; el de sonido cambia entre «Silenciar» y «Activar sonido» |
| 4 | Botones del HUD de 36×30 px | 2.5.5 | 44×40 px (40×40 en móviles estrechos) |
| 5 | La etiqueta «Controles táctiles» no estaba asociada a su casilla | 1.3.1 / 3.3.2 | `<label for="touchToggle">` |
| 6 | Las ventanas no eran diálogos y el foco se quedaba detrás | 4.1.2 / 2.4.3 | `role="dialog"` y `aria-modal`; el juego de fondo queda `inert` y el foco entra al botón principal |
| 7 | Las preguntas nuevas no se anunciaban | 4.1.3 | `aria-live="polite"` en el panel de la pregunta |
| 8 | El laberinto no tenía descripción | 1.1.1 | `role="img"` con `aria-label` en el canvas |

Además: foco visible en mango para todo (`:focus-visible`) y, con «reducir movimiento» activado en el sistema, se desactivan las animaciones de la interfaz.

### Limitaciones conocidas
- El juego es en tiempo real y con límite de tiempo (2.2.1); se acepta como esencial del juego.
- El laberinto en sí no se puede jugar con lector de pantalla.
- No se ha probado con NVDA ni VoiceOver de verdad: conviene hacerlo.

---

## Pendiente
- [ ] Probar con un lector de pantalla real.
- [ ] Sustituir los dibujos procedurales de los personajes por el arte del usuario cuando esté disponible.
