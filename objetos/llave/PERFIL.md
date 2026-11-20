# 🔑 Llave — Objeto de progresión

**Carpeta:** `objetos/llave/`
**Tipo:** Objeto de uso único (consumible)
**Tile en el laberinto:** `K`
**Imagen:** No usa imagen; se dibuja por código (vector)

---

## Ficha

| Campo | Detalle |
|---|---|
| **Efecto** | Abrir **una** puerta `X` cercana |
| **Estado** | `hasKey` (booleano global) — solo se puede llevar una a la vez |
| **Activación** | Al tocar la llave (distancia < `ts*0.6`) |
| **Aparece en** | Nivel 2 (Casa) y Nivel 5 (Estación Espacial) |
| **HUD** | `🔑 Llave lista` en `#powerStatus` |
| **Sonido** | `sfxCollect()` al recogerla, `sfxPower()` al abrir la puerta |
| **Partículas** | 16 doradas al recoger, 22 al abrir (`#ffe066`) |
| **Señal visual** | Llave amarilla flotante con movimiento senoidal suave |

---

## Funcionamiento técnico

- Al recogerla: `k.active=false; hasKey=true`.
- Si `hasKey` y el jugador está a < `ts*0.8` de una puerta cerrada: `d.open=true; hasKey=false`.
- Una puerta abierta ya no bloquea el movimiento (`isBlocked` ignora las puertas `open`).
- `hasKey` se reinicia a `false` en cada `loadLevel`.

---

## Diseño de balance

- **Fortalezas:** Desbloquea atajos y zonas detrás de puertas; obliga a explorar.
- **Debilidades:** Solo abre una puerta; si te la dan antes de tiempo, debes guardarla hasta llegar a la puerta.
- **Consejo:** Busca la llave antes de responder las últimas preguntas.

---

## Relaciones

- Se usa con → `objetos/puerta/PERFIL.md`
- Lilo tiene una "llave especial" en su perfil (habilidad *Vudú y ukelele*) — actualmente no implementada en la lógica.

---

## Pendiente

- [ ] Generar sprite PNG de llave para esta carpeta (opcional; ya hay fallback vectorial)
- [ ] Implementar la llave especial de Lilo
