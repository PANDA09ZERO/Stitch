# 🎸 Ukelele — Power-up de aturdimiento

**Carpeta:** `power-ups/ukelele/`
**Tipo:** Power-up temporal (control masivo / stun)
**Tile en el laberinto:** `U`
**Imagen:** pendiente; ahora se usa dibujo procedural. Ruta prevista: `power-ups/ukelele/ukelele.png` → `ASSET_MAP.ukelele`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Efecto** | Aturde a **todos** los enemigos durante **3 segundos** |
| **Duración** | 3 s (contadores `stun` global y `e.stun` por enemigo) |
| **Activación** | Al tocar el objeto (distancia < `ts*0.6`) |
| **Aparece en** | Nivel 2 (Casa) y Nivel 5 (Estación Espacial) |
| **HUD** | `🎸 Aturde X.Xs` en `#powerStatus` |
| **Sonido** | `sfxStun()` |
| **Partículas** | 14 partículas moradas (`#b388ff`) |
| **Señal visual** | Ukelele dibujado / sprite del ángel con ukelele |

---

## Funcionamiento técnico

- Al recogerlo: `stun = 3` y `enemies.forEach(e => e.stun = 3)`.
- Enemigo aturdido:
  - `moveEntity()` aplica multiplicador `0` → no se mueve.
  - `enemyChoose()` devuelve `{x:0,y:0}` → no cambia de dirección.
  - Se dibuja con `globalAlpha=0.5` y un `💫` sobre la cabeza.
- Jugador: mientras `stun > 0`, la condición de colisión `invuln<=0 && e.stun<=0` es falsa → **inmune** a los enemigos.
- En cada `update()`: `stun -= dt/1000` y `e.stun -= dt/1000`.

---

## Diseño de balance

- **Fortalezas:** Detiene a todos los enemigos a la vez y da invulnerabilidad; perfecto para cruzar una zona peligrosa o responder una pregunta tranquilo.
- **Debilidades:** Duración corta (3 s); no elimina enemigos ni suma tiempo; aparece en pocos niveles.
- **Consejo:** Úsalo cuando varios enemigos te rodeen, no al inicio del nivel.

---

## Pendiente

- [ ] Confirmar que la imagen sigue disponible en la raíz (actualmente no se encuentra)
- [ ] Si se mueve a esta carpeta, actualizar `ASSET_MAP.ukelele`
