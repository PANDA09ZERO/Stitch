# Stitch Game

Juego de laberinto para aprender inglés: lee la pregunta, corre a la zona con la respuesta correcta (A, B, C o D) y escapa de los villanos de la Federación.

**Jugar:** https://juegostitch.vercel.app — en el móvil se puede instalar como app y jugar sin conexión.

## Qué tiene

- 7 niveles (Playa, Casa, Nave, Luau, Estación, Volcán y el jefe final) y modo Supervivencia por oleadas.
- 387 preguntas de vocabulario, frases y gramática, sin repeticiones y cada vez más difíciles.
- Stitch con 11 estilos, Angel y Lilo, cada uno con su habilidad.
- Teclado (flechas o WASD), joystick táctil (toca y arrastra en el laberinto) y mando.

## Cómo está hecho

Todo el juego está en un solo `index.html` (HTML, CSS, JavaScript y Canvas, sin librerías). Los archivos `sw.js`, `manifest.webmanifest` e `icons/` sirven para instalarlo en el móvil.

La documentación de diseño está en `INDICE.md`, con un `PERFIL.md` por carpeta (personajes, power-ups, objetos, sistemas y niveles).

## Probar en local

```
python -m http.server 8765
```

Y abre http://localhost:8765/index.html.

## Publicar

Cada cambio que se sube a la rama `main` de este repositorio se publica solo en Vercel.
