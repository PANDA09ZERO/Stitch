# 👑 Gran Consejo — Jefe

**Carpeta:** `personajes/enemigos/jefes/`
**Rol en el juego:** Jefe final (nivel 6) y cada 5 oleadas en Supervivencia
**Imágenes:** ⬜ Carpeta vacía — pendiente de agregar arte

---

## Ficha

| Campo | Detalle |
|---|---|
| **Arquetipo** | Jefe multiphase |
| **Habilidad estrella** | *Aura de tres fases* — F1 morado → F2 rojo → F3 dorado; cada fase aumenta velocidad y agresividad |
| **Fortalezas** | 3 fases · Aura visible · Muy rápido en F3 · IA cada vez más agresiva |
| **Debilidades** | Patrón predecible por fase · Vulnerable justo al cambiar de aura · Necesita cargar el ataque |
| **Stats sugeridos** | Velocidad escalada por fase · Radio `ts*0.44` · Resistencia `1.50` |
| **Señales visuales** | Aura de color por fase, etiqueta `F1/F2/F3` sobre la cabeza |
| **Estilo de juego (del jugador)** | Completa las preguntas antes de que la fase 3 te alcance |

---

## Diseño de la habilidad

- **Nombre:** Aura de tres fases
- **Efecto en juego:** `bossPhase()` devuelve 1, 2 o 3 según el progreso. En cada fase cambia el color del aura, sube la velocidad y aumenta la probabilidad de que elija perseguir al jugador (`0.6 + 0.2 * fase`).
- **Contrapartida:** El cambio de aura es un momento de vulnerabilidad y el patrón de persecución se vuelve predecible al conocer las fases.

---

## Pendiente

- [ ] Agregar imagen PNG con fondo transparente en esta carpeta
- [ ] Registrar en `ASSET_MAP` como `boss` (ya existe la imagen base en la raíz del juego)
- [ ] Definir recompensa visual al derrotarlo
