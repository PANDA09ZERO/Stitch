# ♾️ Oleadas — Modo Supervivencia

**Carpeta:** `sistema/oleadas/`
**Tipo:** Modo de juego infinito
**Variables:** `survivalMode`, `wave`, `difficulty`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Inicio** | `wave=1`, `difficulty=1` |
| **Dificultad** | `difficulty = 1 + (wave-1)*0.15` (sube 15 % por oleada) |
| **Velocidad enemiga** | `1.3 * e.speed * difficulty` |
| **Preguntas por oleada** | `min(3 + floor(wave/2), L.questions)` |
| **Tiempo por oleada** | `L.time + wave*5` |
| **Mapa** | `survivalLevel(wave)`: jefe cada 5 oleadas; las demás recorren en orden los 6 niveles normales. **Corregido:** con la fórmula anterior la Estación Espacial coincidía siempre con una oleada de jefe y nunca aparecía. Secuencia actual: Playa, Casa, Nave, Luau, **Jefe**, Estación, Volcán, Playa, Casa, **Jefe**… |
| **Jefe** | Aparece cada 5 oleadas (ola 5, 10, 15…) |
| **Bonus** | `score += 250 * wave` al completar una oleada |

---

## Funcionamiento técnico

- `startGame(true)` activa `survivalMode` y reinicia `wave`/`difficulty`.
- `showLevelSummary()` en modo supervivencia:
  - `sfxVictory()`, `wave++`, recalcula `difficulty`, suma puntos, elige mapa y llama a `loadLevel()` sin mostrar resumen.
- `bossPhase()` controla las 3 fases del jefe (documentado en `personajes/enemigos/jefes/PERFIL.md`).

---

## Diseño de balance

- **Fortalezas:** Dificultad progresiva y sin fin; ideal para practicar y subir récord.
- **Debilidades:** Al subir la velocidad enemiga, el margen de error se reduce; requiere dominio del laberinto.
- **Consejo:** Guarda los power-ups para las oleadas de jefe (múltiplo de 5).

---

## Pendiente

- [x] Cartel grande "OLEADA N" (fuente Press Start 2P) al empezar cada oleada, con el nombre del nivel o "¡Llega el Gran Consejo!" en las oleadas de jefe (`banner` + `drawBanner()`). En modo normal muestra "NIVEL N". El HUD dice "Oleada N" en lugar de "Nivel Ola N".
- [x] Top 5 local (ver `sistema/puntuacion/PERFIL.md`).
