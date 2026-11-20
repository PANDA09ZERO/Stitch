# ⏱️ Tiempo

**Carpeta:** `sistema/tiempo/`
**Tipo:** Recurso limitado por nivel
**HUD:** `⏱️ <span id="time">…</span>`

---

## Ficha

| Campo | Detalle |
|---|---|
| **Duración por nivel** | N1 90 s · N2 100 s · N3 110 s · N4 100 s · N5 95 s · N6 (boss) |
| **Supervivencia** | `L.time + wave*5` (aumenta 5 s por oleada) |
| **Bono por acierto** | **+5 s** por respuesta correcta |
| **Descuento** | 1 s por segundo real (`timer -= dt/1000`) |
| **Fin de nivel** | Se agota → derrota (`showEnd(false)`) |
| **Puntuación** | El tiempo restante multiplica el bonus: `100 + floor(timer*2)` |

---

## Funcionamiento técnico

- Variable global `timer`.
- En `loadLevel()`: `timer = survivalMode ? L.time+wave*5 : L.time`.
- En `update()`: `timer -= dt/1000`; si `timer<=0` → `gameOver`.
- En zona correcta: `timer += 5`.

---

## Diseño de balance

- **Fortalezas:** Cada acierto regala tiempo → el buen jugador se auto-extiende.
- **Debilidades:** Los errores no dan tiempo y los enemigos no lo reducen directamente (solo indirectamente al obligar a rodear).
- **Consejo:** Responde rápido: 5 s por pregunta compensan el camino.

---

## Pausa de lectura

Cada vez que sale una pregunta nueva (al empezar un nivel u oleada y tras cada acierto) el juego se congela unos segundos para leer con calma: los enemigos no se mueven, **el reloj no corre** y el jugador espera. Si pulsas una dirección durante la pausa, se aplica al terminar.

- Duración (`readingTime()`): `2 s + 0,04 s por carácter` de la pregunta y sus 4 respuestas, entre **3 y 6 s** (vocabulario ≈ 3,7 s, frases ≈ 4-5 s).
- Se ve un cartel «Lee la pregunta N» arriba del laberinto con una barra que se vacía; el laberinto se oscurece un poco y la pregunta y las respuestas del panel inferior se resaltan en mango.
- Suena un tic suave cada segundo y, al terminar, un pitido y el texto «¡Ya!».
- Código: `readT`, `startReading()`, `endReading()`, `drawReadingCountdown()`; la pausa se comprueba al principio de `update()`.

## Pendiente

- [x] Barra de tiempo bajo el HUD (`#timeBar`/`#timeFill`, `updateTimeBar()`): verde → amarilla por debajo del 40 % → roja parpadeante por debajo de 10 s. Su 100 % es el tiempo inicial del nivel (`timerMax`); si un acierto lo supera, la escala crece.
- [x] Alerta a < 10 s: el contador del HUD parpadea en rojo, suena un tic (`sfxTick()`) cada segundo y la música se acelera un 15 %.
