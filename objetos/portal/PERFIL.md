# 🌀 Portal — Teletransporte por parejas

**Carpeta:** `objetos/portal/`
**Tipo:** Transporte (atajo espacial)
**Tile en el laberinto:** `T`
**Imagen:** No usa imagen; se dibuja por código (círculo morado + 🌀)

---

## Ficha

| Campo | Detalle |
|---|---|
| **Efecto** | Teletransporta al jugador al portal hermano |
| **Agrupación** | Por parejas: el portal `i` se empareja con `i+1` (par) o `i-1` (impar) |
| **Enfriamiento** | 1 segundo (`portalCd`) para evitar rebotes infinitos |
| **Activación** | Automática al pisar el tile (distancia de casilla exacta) |
| **Aparece en** | Nivel 4 (Luau Nocturno) y Nivel 5 (Estación Espacial) — 4 portales por nivel (2 parejas) |
| **Sonido** | `sfxCollect()` |
| **Señal visual** | Círculo morado translúcido con borde `#b388ff` y emoji 🌀 |

---

## Funcionamiento técnico

- En `loadLevel`, el tile `T` se registra en `portals[]`.
- En `update()`: si `portalCd<=0` y `portals.length>=2`, se busca el índice del tile actual.
- Si se encuentra: `partner = portals[idx%2===0 ? idx+1 : idx-1]`.
- Se mueve al centro del compañero y se fija `portalCd=1`.
- El enfriamiento se reduce en cada frame (`portalCd -= dt/1000`).

---

## Diseño de balance

- **Fortalezas:** Atajo entre zonas alejadas; útil para escapar de enemigos o llegar rápido a una respuesta.
- **Debilidades:** Destino fijo (no eliges); el enfriamiento impide usarlo como escudo repeatedamente.
- **Consejo:** Úsalo para cortar caminos, pero vigila qué hay al otro lado.

---

## Pendiente

- [x] Portal animado: late suavemente y tiene dos anillos que giran en sentidos opuestos.
- [x] Teletransporte animado (0,5 s, `player.warp` + `updateWarp()`): el jugador se encoge girando y se desvanece, salta al otro portal y reaparece creciendo. Durante el salto no se mueve ni recibe golpes; suena `sfxWarp()`. El enfriamiento del portal subió a 1,3 s para cubrir la animación.
- [x] Destinos configurables: un nivel puede definir `portalTo` con el destino de cada portal (por orden de lectura del mapa); sin él, se usan parejas 1↔2, 3↔4 (`portalDest()`). El Volcán usa un ciclo de 3 portales (1→2→3→1), y con destinos configurados cada portal muestra su número.
