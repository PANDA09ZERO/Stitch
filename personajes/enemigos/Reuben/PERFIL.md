# 🟠 Reuben — Experimento 625

**Carpeta:** `personajes/enemigos/Reuben/`
**Rol en el juego:** Enemigo — oportunista
**Imágenes:** ⬜ Carpeta vacía — pendiente de agregar arte

---

## Ficha

| Campo | Detalle |
|---|---|
| **Arquetipo** | Vago / Oportunista |
| **Habilidad estrella** | *Hambre de sándwiches* — persigue solo ~55 % del tiempo; se distrae con comida |
| **Fortalezas** | Muy rápido cuando quiere · Sigue órdenes de Jumba |
| **Debilidades** | Perezoso · Glotón · Se distrae · Siempre está cansado |
| **Stats sugeridos** | Velocidad `1.10 → 1.25` · Radio mediano · Resistencia `0.95` |
| **Señales visuales** | Stitch rojo/naranja con delantal, sándwich en la mano |
| **Estilo de juego (del jugador)** | Ráfagas de velocidad; usa la comida como distracción |

---

## Diseño de la habilidad

- **Nombre:** Hambre de sándwiches
- **Efecto en juego:** En cada decisión, Reuben tiene un 55 % de probabilidades de perseguir al jugador y un 45 % de quedarse quieto o ir a por comida. Cuando persigue, lo hace a alta velocidad.
- **Contrapartida:** Su pereza crea huecos de seguridad; el jugador puede usar los power-ups de comida para desviarlo.

---

## Pendiente

- [ ] Agregar imagen PNG con fondo transparente en esta carpeta
- [ ] Registrar en `ASSET_MAP` como `reuben` (ya existe la imagen base en la raíz del juego)
- [ ] Ajustar el porcentaje de persecución según dificultad
