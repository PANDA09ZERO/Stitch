# 🎬 Animaciones con imágenes estáticas

**Carpeta:** `sistema/animaciones/`
**Tipo:** Sistema de animación del jugador
**Archivo implicado:** `index.html`

---

## Las 3 técnicas (de más simple a más potente)

### 1. Transformaciones (sin imágenes nuevas)
Consiste en mover/escalar/girar la imagen en el canvas. No necesitas dibujar frames.

| Efecto | Cómo se hace |
|---|---|
| **Respiración al quieto** | `bob = sin(animTime*3) * size*0.018` |
| **Rebote al caminar** | `bob = sin(animTime*14) * size*0.045` |
| **Squash & stretch** | `sx = 1+w*0.045`, `sy = 1-w*0.045` |
| **Temblor al recibir golpe** | `x += sin(animTime*45) * size*0.09` |
| **Salto de alegría** | `sy = 1 + abs(sin(p*PI*4))*0.16` |

Se aplica con `ctx.save() → translate/scale → dibujar → ctx.restore()`.

### 2. Imágenes como frames (emotes)
Tus imágenes de expresión funcionan como **frames de reacción**. No son una hoja de sprites, pero cumplen el mismo papel:

| Estado | Imagen usada |
|---|---|
| `happy` (acierto) | `stitch_jajaja` (`jajaja.png`) |
| `hurt` (golpe) | `stitch_espanto` (`espanto.png`) |
| `mad` (fallo) | `stitch_molesto` (`molesto.png`) |
| `wow` (ukelele) | `stitch_ups` (`ups.png`) |
| `cool` (café) | `stitch_genio` (`genio.png`) |
| `flee` (Huida de ¡Huir!) | `stitch_uir` (`uir.png`) |
| `scare` (Susto de Espanto) | `stitch_espanto` (`espanto.png`) |
| `shield` (escudo de Elvis) | `stitch_elvis` (`elvis.png`) |

**Angel y Lilo** (y Stitch si falta la imagen de un emote) muestran una **burbuja con emoji** sobre la cabeza: `EMOTE_ICONS` + `drawEmoteBubble()`. Iconos: 😄 acierto, 😵 golpe, 😠 fallo, 😮 ukelele/esquiva, 😎 café, 🎵 canto, 💨 huida, 😱 susto, 🛡️ escudo. La burbuja aparece con un pequeño efecto *pop*. Además hay transformaciones nuevas: `sing` (vaivén), `mad` (temblor) y `flee`/`scare` (estirado horizontal).

Los **textos flotantes** (`floatText()`) muestran qué habilidad se activó ("🛡️ ¡Escudo!", "🎵 ¡Canto!"…) y suben mientras se desvanecen.

Se define en `EMOTES` y se activa con `playAnim(tipo, duracion)`.

### 3. Partículas (feedback visual)
`spawnParticles(x,y,color,n)` crea chispas que salen en todas direcciones. Ya se usa para aciertos, golpes, power-ups y ahora también como **estela detrás del jugador** cuando el café está activo.

---

## Estado del sistema

```js
const EMOTES={happy:'stitch_jajaja',hurt:'stitch_espanto',mad:'stitch_molesto',wow:'stitch_ups',cool:'stitch_genio'};
let animTime=0;
let playerAnim={type:'idle',timer:0,dur:1};
function playAnim(type,dur=.7){ playerAnim.type=type; playerAnim.timer=dur; playerAnim.dur=dur; }
```

- `animTime` avanza cada frame con `dt/1000` → alimenta los senos.
- `playerAnim.timer` baja cada frame; al llegar a 0 vuelve a `idle`.
- `drawPlayerAnimated()` decide: si hay emote activo, dibuja esa imagen; si no, dibuja el personaje/skin normal con la transformación.

---

## Eventos conectados

| Evento | Animación | Duración |
|---|---|---|
| Respuesta correcta | `happy` | 0.9 s |
| Respuesta incorrecta | `mad` | 0.7 s |
| Golpe de enemigo | `hurt` | 0.7 s |
| Recoger café | `cool` | 0.6 s + estela dorada |
| Recoger ukelele | `wow` | 0.7 s |

---

## Cómo añadir una animación nueva

1. **Emote nuevo:** añade una entrada a `EMOTES` apuntando a una clave de `ASSET_MAP`.
2. **Dispararlo:** llama a `playAnim('nombre', duracion)` en el evento correspondiente.
3. **Movimiento especial:** edita `drawPlayerAnimated()` (bloque `if(playerAnim.timer>0)`).
4. **Si quieres frames reales:** crea imágenes `stitch_run_1.png`, `stitch_run_2.png`, regístralas en `ASSET_MAP` y alterna entre ellas usando `Math.floor(animTime*fps) % n`.

---

## Ejemplo: animación de carrera con 4 frames

```js
// 1. Registra las imágenes en ASSET_MAP:
// stitch_run1: 'personajes/buenos/stitch/run1.png', ...

// 2. En drawPlayerAnimated, dentro del bloque sin emote:
const moving=player.dir.x!==0||player.dir.y!==0;
if(moving && ASSETS.stitch_run1){
  const frames=['stitch_run1','stitch_run2','stitch_run3','stitch_run4'];
  const f=frames[Math.floor(animTime*10)%frames.length];
  drawAsset(ctx,ASSETS[f],0,0,size);
} else {
  drawCharArt(ctx,player.char.id,0,0,size);
}
```

Con 4 imágenes a 10 fps obtienes una carrera fluida. Cuantos más frames, más suave.

---

## Consejos de diseño

- **10–12 fps** es suficiente para pixel art; 24 fps para algo más suave.
- Mantén todas las imágenes del mismo **tamaño y centro** para que no "bailen".
- Fondo transparente (PNG) imprescindible.
- Combina transformaciones + emotes: sale mejor y cuesta menos que dibujar 20 frames.

---

## Pendiente

- [x] Carrera mejorada por código (sin PNG nuevos): zancada con doble rebote por ciclo, squash/stretch, balanceo, inclinación hacia donde corre, espejo al ir a la izquierda (`player.facing`), polvo a los pies (`spawnDust()`) y paso más rápido con café, Huida o Risa.
- [x] Animación de entrada/salida en portales (ver `objetos/portal/PERFIL.md`).
- [x] Emotes para Angel y Lilo (burbuja con emoji; se sustituirá por imágenes cuando haya arte)
- [x] Corregido: las partículas se dibujaban sin el desplazamiento del laberinto (`offX/offY`) y salían descolocadas
