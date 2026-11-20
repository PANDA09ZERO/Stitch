# 🏆 Puntuación

**Carpeta:** `sistema/puntuacion/`
**Tipo:** Métrica de progreso
**HUD:** `🏆 <span id="score">0</span>`
**Récord:** `localStorage['smc_best']`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Por respuesta correcta** | `100 + floor(timer*2)` (más tiempo restante = más puntos) |
| **Por nivel completado** | Resumen en `showLevelSummary()` |
| **Por oleada (supervivencia)** | `score += 250 * wave` al pasar de oleada |
| **Récord** | Se guarda en `localStorage` con clave `smc_best` |
| **Reinicio** | `score=0` en `startGame()` |

---

## Funcionamiento técnico

- Variable global `score`.
- Cada cambio actualiza `document.getElementById('score').textContent`.
- En `showEnd()`: compara con el récord y lo actualiza si es mayor.
- En la pantalla de inicio se muestra `Récord: <span id="bestScore">`.

---

## Diseño de balance

- **Fortalezas:** Incentiva responder rápido y sobrevivir muchas oleadas.
- **Debilidades:** No hay bonus por estilo (esquivas, skins, etc.).
- **Consejo:** En supervivencia, llegar lejos multiplica el premio por oleada.

---

## Pendiente

- [x] Top 5 local en `localStorage['smc_top5']` (puntuación, personaje/skin, nivel u oleada, fecha). Se muestra en la pantalla de inicio y en la de fin, resaltando la entrada nueva. `smc_best` se sigue escribiendo por compatibilidad y, si era lo único que existía, se migra como "Récord anterior". Toda lectura/escritura pasa por `storeGet/storeSet` con try/catch.
- [ ] Bonus por skin usada
- [x] Bonus de +500 (`PERFECT_BONUS`) por completar un nivel u oleada sin perder vidas por enemigos (`levelHits`). Los golpes que absorbe una habilidad (escudo de Elvis, esquivas) no cuentan, y fallar respuestas tampoco. Se muestra en el resumen del nivel o en el cartel de la siguiente oleada.
