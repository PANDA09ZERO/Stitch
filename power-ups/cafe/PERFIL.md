# ☕ Café — Power-up de velocidad

**Carpeta:** `power-ups/cafe/`
**Tipo:** Power-up temporal (buff de velocidad)
**Tile en el laberinto:** `O`
**Imagen:** pendiente; ahora se usa dibujo procedural. Ruta prevista: `power-ups/cafe/cafe.png` → `ASSET_MAP.coffee`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Efecto** | Velocidad de movimiento ×1.6 durante **5 segundos** |
| **Duración** | 5 s (contador `speedBoost`) |
| **Activación** | Al tocar el objeto (distancia < `ts*0.6`) |
| **Aparece en** | Todos los niveles (1 a 6) — siempre en el pasillo central |
| **HUD** | `☕ Velocidad X.Xs` en `#powerStatus` |
| **Sonido** | `sfxPower()` |
| **Partículas** | 14 partículas doradas (`#ffd166`) |
| **Señal visual** | Taza de café dibujada / sprite del ángel con café |

---

## Funcionamiento técnico

- Al recogerlo: `speedBoost = 5`.
- En cada `update()`: `speedBoost -= dt/1000`.
- En `moveEntity()`: `speed = obj.speed * ... * (speedBoost>0 ? 1.6 : 1)`.
- El contador se reinicia a `0` al cargar un nivel (`loadLevel`).

---

## Diseño de balance

- **Fortalezas:** Permite escapar de enemigos y llegar rápido a la zona correcta; ideal en niveles grandes.
- **Debilidades:** Solo dura 5 s; no protege contra el tiempo agotado ni contra respuestas incorrectas.
- **Consejo:** Guárdalo para los tramos finales o cuando Gantu esté cerca.

---

## Pendiente

- [ ] Confirmar que la imagen sigue disponible en la raíz (actualmente no se encuentra)
- [ ] Si se mueve a esta carpeta, actualizar `ASSET_MAP.coffee`
