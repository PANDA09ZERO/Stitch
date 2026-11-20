# 🛡️ Invulnerabilidad

**Carpeta:** `sistema/invulnerabilidad/`
**Tipo:** Estado temporal de protección
**Variable:** `invuln`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Duración al recibir golpe** | 2 segundos |
| **Duración al iniciar nivel** | 2 segundos |
| **Efecto** | El jugador no puede recibir daño de enemigos mientras `invuln > 0` |
| **Señal visual** | El personaje parpadea (se oculta 1 de cada 2 frames) |
| **Condición de colisión** | `dist < player.radius+e.radius && invuln<=0 && e.stun<=0` |

---

## Funcionamiento técnico

- En `loadLevel()`: `invuln = 2` (dar tiempo a orientarse al empezar).
- En `update()`: `invuln -= dt/1000`.
- Al colisionar: `invuln = 2` junto con el reposicionamiento del jugador.
- En `render()`: `if(!(invuln>0 && Math.floor(invuln*10)%2===0))` dibuja el personaje; si no, lo salta → parpadeo.

---

## Diseño de balance

- **Fortalezas:** Evita perder varias vidas seguidas al ser alcanzado; da 2 s de gracia al inicio.
- **Debilidades:** No protege contra respuestas incorrectas ni contra el tiempo; solo cubre golpes de enemigos.
- **Consejo:** Aprovecha esos 2 s para alejarte del enemigo que te golpeó.

---

## Relaciones

- Afecta → `sistema/vidas/PERFIL.md`
- Similar a → `power-ups/ukelele/PERFIL.md` (aturdimiento también da inmunidad temporal)
