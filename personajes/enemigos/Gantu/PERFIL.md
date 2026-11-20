# 🟣 Gantu

**Carpeta:** `personajes/enemigos/Gantu/`
**Rol en el juego:** Enemigo — perseguidor tipo tanque
**Imágenes:** ⬜ Carpeta vacía — pendiente de agregar arte

---

## Ficha

| Campo | Detalle |
|---|---|
| **Arquetipo** | Tanque / Perseguidor |
| **Habilidad estrella** | *Persecución implacable* — corre tras el jugador cuando lo detecta dentro de 9 casillas |
| **Fortalezas** | Fuerza bruta · Tenaz · Resiste golpes · Gran tamaño |
| **Debilidades** | Lento girando · Predecible · Torpe en pasillos estrechos · Se le engaña fácil |
| **Stats sugeridos** | Velocidad `0.90 → 1.25` (según nivel) · Radio grande · Resistencia `1.20` |
| **Señales visuales** | Gigante morado, uniforme de capitán, ceño fruncido |
| **Estilo de juego (del jugador)** | Presión constante; hay que rodearlo, no enfrentarlo |

---

## Diseño de la habilidad

- **Nombre:** Persecución implacable
- **Efecto en juego:** Cuando el jugador está a ≤9 casillas, Gantu calcula la dirección hacia él y acelera. En niveles avanzados aumenta su velocidad base.
- **Contrapartida:** Su gran radio de giro lo hace perder tiempo en curvas cerradas; el jugador ágil puede esquivarlo en laberintos.

---

## Pendiente

- [ ] Agregar imagen PNG con fondo transparente en esta carpeta
- [ ] Registrar en `ASSET_MAP` como `gantu` (ya existe la imagen base en la raíz del juego)
- [ ] Ajustar rango de detección y velocidad según balance
