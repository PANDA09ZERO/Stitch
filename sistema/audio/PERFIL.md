# 🔊 Audio — Web Audio API

**Carpeta:** `sistema/audio/`
**Tipo:** Sistema de sonido procedural
**Dependencia:** Web Audio API (sin archivos de audio)

---

## Ficha

| Campo | Detalle |
|---|---|
| **Motor** | `AudioContext` + `masterGain` |
| **Volumen** | `0.25` (se anula con el botón de mute) |
| **Forma de onda** | `square` por defecto (sonido retro 8-bit) |
| **Mute** | Botón 🔊/🔇 en el HUD; altera `masterGain.gain.value` |
| **Inicio** | `ensureAudio()` se llama al empezar la partida (requiere interacción del usuario) |

---

## Efectos implementados

| Función | Cuándo suena |
|---|---|
| `sfxCollect()` | Recoger llave, usar portal |
| `sfxPower()` | Café, abrir puerta, pasar oleada |
| `sfxStun()` | Recoger ukelele |
| `sfxCorrect()` | Respuesta correcta |
| `sfxWrong()` | Respuesta incorrecta |
| `sfxHit()` | Golpe de enemigo |
| `sfxGameOver()` | Perder todas las vidas |
| `sfxVictory()` | Completar nivel / oleada |

---

## Función base

```js
function beep(freq=440, dur=0.1, type='square', vol=0.25, start=0){
  // crea oscilador + ganancia, lo conecta a masterGain
  // o.start(t); o.stop(t+dur);
}
```

---

## Diseño de balance

- **Fortalezas:** Sin archivos externos; funciona offline; estilo retro coherente con el arte.
- **Debilidades:** Sonidos muy simples; requiere interacción del usuario para iniciar el contexto de audio.
- **Consejo:** Para mejorar, añadir melodías cortas por nivel con secuencias de `beep()`.

---

## Pendiente

- [x] Música de fondo por nivel: 7 bucles originales de 16 pasos (melodía + bajo) en `MUSIC`, uno por nivel incluido el Volcán, programados con antelación por `musicTick()` a través de `musicGain` (35 % del volumen general). Se para en pausa, al terminar el nivel, en las pantallas de resumen y con la pestaña oculta. El jefe acelera un 10 % por fase y todo acelera un 15 % con menos de 10 s.
- [x] El silencio se guarda en `localStorage['smc_muted']` (`'1'`/`'0'`) y se restaura al abrir el juego.
