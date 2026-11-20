# 🗺️ Niveles — Aventura principal

**Carpeta:** `niveles/`
**Tipo:** Configuración de mapas
**Cantidad:** 7 niveles (6 normales + jefe)
**Fuente:** Array `LEVELS` en `index.html`

---

## Resumen

| # | Nombre | Preguntas | Tiempo | Enemigos | Objetos especiales |
|---|---|---|---|---|---|
| 1 | Playa de Kauai | 3 | 90 s | Gantu, Pleakley | Café `O` |
| 2 | Casa de Lilo y Nani | 4 | 100 s | Gantu, Jumba, Pleakley | Café `O`, Ukelele `U`, Llave `K`, Puerta `X` |
| 3 | Nave Galáctica | 4 | 110 s | Gantu, Jumba, Pleakley, Reuben | Café `O` |
| 4 | Luau Nocturno | 5 | 100 s | Gantu, Jumba, Pleakley, Reuben | Café `O`, Portales `T` ×2 |
| 5 | Estación Espacial | 5 | 95 s | Gantu, Jumba, Pleakley, Reuben | Ukelele `U`, Portales `T` ×4, Llave `K`, Puerta `X` |
| 6 | **Volcán Kīlauea** (nuevo) | 5 | 95 s | Gantu, Jumba, Pleakley, Reuben | Café `O`, Ukelele `U`, Portales `T` ×3 en ciclo, Llave `K`, Puerta `X` (atajo) |
| 7 | Jefe Final: Gran Consejo | 6 | 90 s | Gantu, Jumba, Pleakley, Reuben, **Jefe** | Café `O` |

---

## Selector de nivel

En la pantalla de inicio, «Nivel inicial» muestra los 7 niveles con su icono (🏖️ 🏠 🚀 🌺 🛰️ 🌋 👑, campo `icon` de cada nivel). Se puede empezar la aventura en cualquiera; el botón cambia a «¡Empezar en el nivel N!». Los niveles superados llevan ✓ (`localStorage['smc_done']`, `markLevelDone()`). Supervivencia siempre empieza en la oleada 1. Código: sección `// ===== SELECTOR DE NIVEL =====` (`buildLevelSelect()`, `selectedLevel`).

---

## Temas visuales

Cada nivel define `theme` con 4 colores:

| Nivel | Muro | Camino | Fondo | Acento |
|---|---|---|---|---|
| 1 Playa | `#c9a24a` | `#f3e6c9` | `#0b5c7a` | `#00d4ff` |
| 2 Casa | `#6b4a2b` | `#efe0c8` | `#3a2a1a` | `#ff6b6b` |
| 3 Nave | `#2a3a6a` | `#1a2244` | `#05081a` | `#b388ff` |
| 4 Luau | `#4a2a6a` | `#2a1a4a` | `#1a0a2a` | `#ff5fa2` |
| 5 Estación | `#3a4a6a` | `#1a2a4a` | `#050814` | `#00d4ff` |
| 6 Jefe | `#6a2a3a` | `#3a1a2a` | `#1a0508` | `#ff6b6b` |

---

## Leyenda de tiles

| Tile | Significado | Documentación |
|---|---|---|
| `#` | Muro (bloquea) | — |
| ` ` | Camino | — |
| `P` | Inicio del jugador | — |
| `A` `B` `C` `D` | Zonas de respuesta | `sistema/zonas-respuesta/PERFIL.md` |
| `E` | Punto de aparición de enemigo | `personajes/enemigos/*/PERFIL.md` |
| `O` | Café | `power-ups/cafe/PERFIL.md` |
| `U` | Ukelele | `power-ups/ukelele/PERFIL.md` |
| `T` | Portal | `objetos/portal/PERFIL.md` |
| `K` | Llave | `objetos/llave/PERFIL.md` |
| `X` | Puerta | `objetos/puerta/PERFIL.md` |

---

## Progresión de dificultad

- Más preguntas por nivel (3 → 6).
- Más enemigos (2 → 5).
- Enemigos más rápidos (velocidad base 0.85 → 1.5).
- Nuevas mecánicas: llave/puerta (N2), portales (N4), jefe (N6).

---

## Laberinto girado en pantallas verticales

Los mapas están dibujados en horizontal (21 columnas × 13–15 filas). En un móvil en vertical eso dejaba el laberinto en poco más de un tercio de la altura. Ahora, al cargar cada nivel, `shouldRotateMaze()` compara el tamaño de casilla del mapa normal y del transpuesto en el área disponible; si el transpuesto da casillas al menos un 10 % más grandes, `loadLevel()` lo transpone (filas ↔ columnas).

- Se transpone **después** de leer los objetos, así el emparejamiento de portales (por orden de lectura) no cambia.
- Es una simetría diagonal: el laberinto es el mismo, con los mismos caminos, objetos y zonas; solo cambia su orientación.
- Si se gira el dispositivo a mitad de nivel, `resizeCanvas()` vuelve a decidir y, si conviene, `transposeLive()` reorienta el laberinto en plena partida: intercambia x↔y en casillas, objetos, jugador, enemigos (posición y dirección), partículas y textos flotantes. El jugador queda en la misma casilla (transpuesta) y nadie acaba dentro de un muro.

### Móvil en horizontal
En pantallas apaisadas y bajas (`@media (orientation:landscape) and (max-height:520px)`) el panel inferior pasa a ser una **columna lateral derecha** con la pregunta, el estado y un D-Pad algo más compacto (48 px). Se ocultan las líneas de ayuda para ganar espacio. El laberinto usa toda la altura.

### Resultado medido (tamaño de casilla)
| Pantalla | Antes | Ahora |
|---|---|---|
| Móvil vertical 375×812 | 17 px | 23 px (girado; ocupa el 78 % del área de juego) |
| Móvil horizontal 812×375 | 17 px | 25 px (panel lateral) |
| Móvil pequeño horizontal 667×375 | — | 22–23 px |
| Tableta 768×1024 | — | 41 px (girado) |
| Escritorio | 37 px | 37 px (sin cambios) |

## Pendiente

- [ ] Crear carpetas individuales por nivel si se quiere documentación extendida
- [x] Nivel extra **Volcán Kīlauea**, antes del jefe. Tema basalto/lava (`#3b2626` / `#5c4033` / `#1a0600` / acento `#ff7b00`), muros con grietas de lava que palpitan (`lava:true`, `drawLavaCrack()`), música propia y 3 portales en ciclo (`portalTo:[1,2,0]`). El mapa se validó con un recorrido en anchura: todo es alcanzable sin la puerta, que solo abre un atajo. El jefe pasa a ser el nivel 7 y el código lo localiza con `BOSS_LEVEL` (siempre el último).
