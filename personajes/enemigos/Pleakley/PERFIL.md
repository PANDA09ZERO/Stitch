# 🟢 Pleakley

**Carpeta:** `personajes/enemigos/Pleakley/`
**Rol en el juego:** Enemigo — caos / impredecible
**Imágenes:** ⬜ Carpeta vacía — pendiente de agregar arte

---

## Ficha

| Campo | Detalle |
|---|---|
| **Arquetipo** | Disfraz / Caos |
| **Habilidad estrella** | *Camuflaje* — se mueve al azar y se disfraza; nadie sabe dónde aparecerá |
| **Fortalezas** | Impredecible · Sigiloso · Engaña al jugador |
| **Debilidades** | Cobarde · Mal atleta · Se asusta fácil · Depende del disfraz |
| **Stats sugeridos** | Velocidad `0.85 → 1.15` · Radio mediano · Resistencia `0.90` |
| **Señales visuales** | Alien verde delgado, uno o dos ojos, ropa de agente |
| **Estilo de juego (del jugador)** | Amenaza aleatoria: mantente alerta y no te confíes |

---

## Diseño de la habilidad

- **Nombre:** Camuflaje
- **Efecto en juego:** Pleakley elige direcciones aleatorias en cada intersección, por lo que su ruta no es predecible. Puede aparecer en cualquier zona.
- **Contrapartida:** Al ser cobarde y mal atleta, huye en lugar de atacar: es más una distracción que un cazador letal.

---

## Pendiente

- [ ] Agregar imagen PNG con fondo transparente en esta carpeta
- [ ] Registrar en `ASSET_MAP` como `pleakley` (ya existe la imagen base en la raíz del juego)
- [ ] Ajustar la aleatoriedad de movimiento por nivel
