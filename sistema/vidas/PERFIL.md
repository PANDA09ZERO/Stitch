# ❤️ Vidas

**Carpeta:** `sistema/vidas/`
**Tipo:** Recurso del jugador
**Cantidad inicial:** **5**
**HUD:** `❤️ <span id="lives">5</span>`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Valor inicial** | 5 (se reinicia en `startGame()`) |
| **Pérdida por enemigo** | −1 al colisionar si `invuln<=0` y `e.stun<=0` |
| **Pérdida por respuesta incorrecta** | −1 al entrar en una zona incorrecta |
| **Recuperación** | Ninguna (no hay vidas extra implementadas) |
| **Fin de juego** | `lives<=0` → `gameOver=true`, `showEnd(false)` |
| **Sonido** | `sfxHit()` (enemigo), `sfxWrong()` (respuesta), `sfxGameOver()` (final) |

---

## Funcionamiento técnico

- Variable global `lives`.
- Cada cambio actualiza `document.getElementById('lives').textContent`.
- En colisión con enemigo: además de perder vida, el jugador se reposiciona al primer tile de camino y recibe `invuln=2`.

---

## Diseño de balance

- **Fortalezas:** 5 vidas dan margen para aprender; la invulnerabilidad evita perder varias de golpe.
- **Debilidades:** No se recuperan; un error de vocabulario cuesta tan caro como un golpe.
- **Consejo:** Prioriza responder bien antes que correr: cada fallo es una vida menos.

---

## Pendiente

- [ ] Power-up de vida extra (corazón)
- [ ] Recompensa de +1 vida al completar un nivel perfecto
