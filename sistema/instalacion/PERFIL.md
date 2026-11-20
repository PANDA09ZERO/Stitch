# 📲 Instalar en el móvil (PWA)

**Carpeta:** `sistema/instalacion/`
**Qué es:** el juego se puede instalar en el móvil como una app (icono en la pantalla de inicio, pantalla completa) y funciona **sin conexión** después de abrirlo una vez.

---

## Archivos

| Archivo | Para qué |
|---|---|
| `manifest.webmanifest` | Nombre, colores, orientación libre y los iconos de la app |
| `sw.js` | *Service worker*: guarda el juego en el móvil para abrirlo sin internet |
| `icons/icon-192.png`, `icons/icon-512.png` | Iconos de la app |
| `icons/icon-maskable-512.png` | Icono adaptativo de Android (con margen de seguridad) |
| `icons/apple-touch-icon.png` | Icono para iPhone/iPad |

> **Excepción a «un solo `index.html`»:** el código del juego sigue entero en `index.html`. Estos archivos extra los exige el navegador para poder instalar la app: el service worker tiene que ser un archivo aparte y los iconos tienen que ser PNG.

Los iconos son pixel-art propio (una criatura azul con orejas, simétrica, sobre el fondo noche del juego), generados con Python/Pillow.

## Cómo se instala

- **Android (Chrome, Edge, Samsung Internet):** en el menú de inicio aparece el botón **«Instalar en el móvil»** (cuando el navegador lo permite, evento `beforeinstallprompt`). También sirve el menú del navegador → «Instalar aplicación».
- **iPhone / iPad (Safari):** Safari no tiene ese aviso. El botón muestra las instrucciones: **Compartir → Añadir a pantalla de inicio**.
- Si el juego ya se abrió como app instalada, el botón no aparece.

## Requisitos

- Tiene que servirse por **https** (Vercel ya lo hace) o desde `localhost` para pruebas.
- Abriendo `index.html` directamente como archivo (`file://`) no se puede instalar; el juego funciona igual, pero sin el service worker.

## Publicación

- Web: **https://juegostitch.vercel.app** (proyecto de Vercel `juegostitch`).
- Repositorio: **https://github.com/PANDA09ZERO/Stitch** (rama `main`).
- El proyecto de Vercel está conectado al repositorio: **cada `git push` a `main` publica una versión nueva sola**. Las demás ramas generan una vista previa con su propia dirección.
- `.vercelignore` evita publicar la documentación interna (`*.md`) y los temporales; `vercel.json` hace que `index.html` y `sw.js` no se queden en caché.
- Publicar a mano sigue siendo posible con `vercel deploy --prod` desde la carpeta del juego.

## Actualizaciones

El service worker sirve el juego desde la caché al instante y descarga la versión nueva en segundo plano: **los cambios aparecen la segunda vez que se abre**. Al publicar cambios importantes, sube `VERSION` en `sw.js` (por ejemplo `smc-v2`) para que se borre la caché antigua. Si añades imágenes nuevas, añádelas también a la lista `ARCHIVOS` de `sw.js`.

## Pruebas realizadas

- En Chromium (Playwright): service worker activo y controlando la página, los 18 archivos en caché y el manifiesto con 3 iconos válidos.
- **Sin conexión:** con el servidor apagado, el juego cargó, empezó partida y mostró preguntas, respuestas e imágenes.
- El navegador integrado de la app de Claude no admite service workers (muestra «An unknown error occurred when fetching the script»); no afecta a los navegadores reales.
- No probado en un teléfono físico: conviene hacerlo tras publicar en Vercel.
