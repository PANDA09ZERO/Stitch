# 🚪 Puerta — Obstáculo de progresión

**Carpeta:** `objetos/puerta/`
**Tipo:** Obstáculo bloqueante (se abre con llave)
**Tile en el laberinto:** `X`
**Imagen:** No usa imagen; se dibuja por código (vector)

---

## Ficha

| Campo | Detalle |
|---|---|
| **Efecto** | Bloquea el paso mientras esté cerrada |
| **Estado** | `d.open` (booleano por puerta) |
| **Activación** | Se abre automáticamente al acercarse con `hasKey=true` |
| **Aparece en** | Nivel 2 (Casa) y Nivel 5 (Estación Espacial) |
| **Sonido** | `sfxPower()` al abrirse |
| **Partículas** | 22 doradas (`#ffe066`) |
| **Señal visual** | Puerta de madera con barrotes y marco dorado; candado central |

---

## Funcionamiento técnico

- En `loadLevel`, el tile `X` se convierte en espacio y se registra en `doors[]` con `open:false`.
- `isBlocked(tx,ty)` devuelve `true` si existe una puerta en esa casilla con `!open`.
- Se abre al llegar a una casilla pegada a la puerta (distancia de 1 casilla en horizontal o vertical) con llave: `d.open=true; hasKey=false` y aviso «¡Puerta abierta!». Sin llave aparece «¡Busca la llave!» (como mucho cada 3 s).
- Ya abierta, se dibuja como un marco translúcido (`rgba(255,224,102,.55)`) y no bloquea.

---

## Diseño de balance

- **Fortalezas:** Crea progresión y obliga a recoger la llave; separa secciones del laberinto.
- **Debilidades:** No es un obstáculo real si ya tienes la llave; solo hay una puerta por nivel.
- **Consejo:** No evites la llave: el camino detrás de la puerta suele llevar a una zona de respuesta.

---

## Relaciones

- Se abre con → `objetos/llave/PERFIL.md`
