# 🎯 Zonas de respuesta (A / B / C / D)

**Carpeta:** `sistema/zonas-respuesta/`
**Tipo:** Mecánica central de preguntas
**Tiles en el laberinto:** `A`, `B`, `C`, `D`
**Imagen:** No usa imagen; se dibuja por código

---

## Ficha

| Campo | Detalle |
|---|---|
| **Cantidad** | 4 zonas por nivel |
| **Contenido** | Cada zona muestra una de las 4 opciones de la pregunta actual |
| **Zona correcta** | Se decide en `setupQuestion()` según `currentQuestion.c` y `z.optionIndex` |
| **Al acertar** | +puntos, +5 s de tiempo, avance de pregunta, limpieza de colores |
| **Al fallar** | −1 vida, partículas rojas, repositionamiento del jugador |
| **Señal visual** | Recuadro verde (correcta) o rojo (incorrecta), letra grande y texto de la opción |

---

## Funcionamiento técnico

- En `loadLevel`: los tiles A/B/C/D se registran en `zones[]` con su `label`.
- En `setupQuestion()`:
  - Se mezclan los índices de opciones (`z.optionIndex`).
  - `z.correct = (z.optionIndex === currentQuestion.c)`.
  - Se reinicia `z._triggered = false` para todas.
- En `update()`: si el jugador está a < `ts*0.55` de una zona y no se ha disparado:
  - Correcta → `score += 100 + floor(timer*2)`, `timer += 5`, `qIndex++`, nueva pregunta o fin de nivel.
  - Incorrecta → `lives--`,Partículas rojas, `sfxWrong()`, reposicionar al jugador.
- `_triggered` evita contar la misma zona dos veces seguidas.

---

## Diseño de balance

- **Fortalezas:** Convierte el laberinto en un tablero de respuestas; el jugador debe elegir dónde ir, no solo qué tecla pulsar.
- **Debilidades:** Si falla, pierde vida y tiempo de reposicionamiento; las 4 zonas están repartidas por el mapa.
- **Consejo:** Lee la pregunta antes de moverte; la zona correcta cambia en cada pregunta.

---

## Relaciones

- Usa → `sistema/banco-preguntas/PERFIL.md`
- Afecta → `sistema/vidas/PERFIL.md`, `sistema/tiempo/PERFIL.md`, `sistema/puntuacion/PERFIL.md`
