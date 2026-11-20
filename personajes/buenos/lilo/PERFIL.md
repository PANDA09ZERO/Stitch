# ❤️ Lilo

**Carpeta:** `personajes/buenos/lilo/`
**Rol en el juego:** Personaje jugable (inteligente / sigilosa)
**Imágenes:** ⬜ Carpeta vacía — pendiente de agregar arte

---

## Ficha

| Campo | Detalle |
|---|---|
| **Arquetipo** | Inteligente / Sigilosa |
| **Habilidad estrella** | *Vudú* — hitbox −15 % y abre una puerta `X` por nivel sin llave |
| **Fortalezas** | Difícil de atrapar · Inteligente y creativa · Se camufla |
| **Debilidades** | Lenta: velocidad −8 % |
| **Stats** | Velocidad `0.92` · Hitbox `0.85` |
| **Señales visuales** | Niña humana, vestido rojo, muñeca vudú en la mano |
| **Estilo de juego** | Precisión y sigilo en vez de velocidad |

---

## Diseño de la habilidad

- **Nombre:** Vudú
- **Efecto en juego:** Su radio de colisión es un 15 % menor y, una vez por nivel, abre una puerta `X` sin la llave `K`. Si lleva la llave `K`, se gasta primero la llave y el vudú se guarda.
- **Feedback:** texto "🪄 ¡Vudú!" al abrir y el HUD muestra "🪄 Vudú listo" mientras esté disponible.
- **Contrapartida:** velocidad −8 %; si la acorralan, le cuesta escapar.
- **Código:** `ab.voodoo` en `resetAbilities()` y en el bloque de puertas de `update()`.

---

## Pendiente

- [ ] Agregar imagen PNG con fondo transparente en esta carpeta
- [ ] Registrar en `ASSET_MAP` como `lilo` (la imagen base original ya no existe; ruta prevista `personajes/buenos/lilo/lilo.png`)
- [x] Llave especial (vudú) implementada
- [x] Emotes (burbuja con emoji)
