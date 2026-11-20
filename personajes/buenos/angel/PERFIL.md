# 🌸 Angel — Experimento 624

**Carpeta:** `personajes/buenos/angel/`
**Rol en el juego:** Personaje jugable (veloz / hipnótica)
**Imágenes:** ⬜ Carpeta vacía — pendiente de agregar arte

---

## Ficha

| Campo | Detalle |
|---|---|
| **Arquetipo** | Veloz / Hipnótica |
| **Habilidad estrella** | *Canto de sirena* — +15 % de velocidad; si un enemigo llega a 3 casillas, lo aturde 1,5 s (enfriamiento 12 s) |
| **Fortalezas** | Muy rápida · Ágil y esquiva · Pareja de Stitch |
| **Debilidades** | Frágil: tras un golpe solo tiene 1,2 s de invulnerabilidad (normal: 2 s) · El canto tiene enfriamiento |
| **Stats** | Velocidad `1.15` · Hitbox `1.00` · Invulnerabilidad tras golpe `1.2 s` |
| **Señales visuales** | Piel rosa, orejas largas, expresión dulce, lazo en la cabeza |
| **Estilo de juego** | Correr y esquivar; evitar enfrentamientos directos |

---

## Diseño de la habilidad

- **Nombre:** Canto de sirena
- **Efecto en juego:** +15 % de velocidad. Es automática (funciona igual con teclado, D-Pad y swipe): cuando el enemigo no aturdido más cercano está a ≤ 3 casillas, lo aturde 1,5 s. Enfriamiento de 12 s.
- **Feedback:** burbuja 🎵, texto "🎵 ¡Canto!", partículas rosas sobre el enemigo y el HUD muestra "🎵 Canto listo" o el tiempo restante.
- **Contrapartida:** enfriamiento largo e invulnerabilidad de solo 1,2 s tras recibir un golpe.
- **Código:** `AB.singRange / singStun / singCd` y `updateAbilities()` en `index.html` (sección `// ===== HABILIDADES =====`).

---

## Pendiente

- [ ] Agregar imagen PNG con fondo transparente en esta carpeta
- [ ] Registrar en `ASSET_MAP` como `angel` (la imagen base original ya no existe; ruta prevista `personajes/buenos/angel/angel.png`)
- [x] Canto de sirena implementado
- [x] Emotes (burbuja con emoji)
