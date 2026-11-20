# 🟦 Stitch — Experimento 626

**Carpeta:** `personajes/buenos/stitch/`
**Rol en el juego:** Personaje jugable base (equilibrado)
**Imágenes:** 10 variantes + 1 fondo (ver sección Skins)

---

## Ficha principal

| Campo | Detalle |
|---|---|
| **Arquetipo** | Todo-terreno / Cazador equilibrado |
| **Habilidad estrella** | *Instinto 626* — rastrea items y zonas; usa todos los power-ups sin penalización |
| **Fortalezas** | Versátil y balanceado · Fuerte (4 brazos) · Resistente |
| **Debilidades** | Impulsivo (se distrae con comida) · No sabe nadar bien · Depende del café |
| **Stats base** | Velocidad `1.00` · Hitbox `1.00` · Resistencia `1.00` |
| **Señales visuales** | Piel azul, orejas grandes, ojos negros, tres mechones |
| **Estilo de juego** | Personaje ideal para aprender; canon de referencia para las skins |

---

## Skins / variantes

Todas parten de la base de Stitch con un ajuste pequeño. **Ninguna es estrictamente superior.**

### 1. Clásico — dibujo procedural (sin imagen todavía)
- **Arquetipo:** Equilibrado
- **Habilidad:** *Instinto 626* — café y ukelele duran +30 % (café 6,5 s, ukelele 3,9 s)
- **Fortalezas:** Saca más de los power-ups; stats neutros
- **Debilidades:** Sin habilidad defensiva; depende de encontrar power-ups
- **Stats:** Vel `1.00` · Hitbox `1.00`
- **Imagen:** la original (`image-removebg-preview (1).png`) ya no existe. Mientras no haya arte se usa `drawStitch()`. Para usar una imagen, guárdala como `personajes/buenos/stitch/clasico.png` y pon esa ruta en `ASSET_MAP.stitch`.

### 2. Elvis — `elvis.png` (375×666)
- **Arquetipo:** Resistente / Carismático
- **Habilidad:** *Rock Star* — el traje absorbe el primer golpe de enemigo de cada nivel
- **Fortalezas:** Un golpe gratis por nivel; imponente
- **Debilidades:** Velocidad −5 %; hitbox +5 %
- **Stats:** Vel `0.95` · Hitbox `1.05`
- **Señales visuales:** Traje blanco con vivos dorados, cinturón negro, patillas

### 3. Hula — `falda_ulaula.png` (375×666)
- **Arquetipo:** Ágil / Fresco
- **Habilidad:** *Danza Hula* — 30 % de probabilidad de esquivar un golpe en Playa y Luau
- **Fortalezas:** Velocidad +5 %; hitbox −5 %
- **Debilidades:** Sin esquiva fuera de Playa/Luau
- **Stats:** Vel `1.05` · Hitbox `0.95`
- **Señales visuales:** Falda de hojas verdes, collar de flores

### 4. Surfer — `surfer.png` (236×416)
- **Arquetipo:** Veloz
- **Habilidad:** *Ola* — velocidad +15 % extra en Playa y Luau
- **Fortalezas:** Velocidad base +10 %; rapidísimo en la playa
- **Debilidades:** −10 % de velocidad en interiores (Casa, Nave, Estación)
- **Stats:** Vel `1.10` · Hitbox `1.00`
- **Señales visuales:** Tabla de surf, shorts, gafas de sol

### 5. Genio — `genio.png` (500×500)
- **Arquetipo:** Estratega
- **Habilidad:** *Mente brillante* — +10 s al empezar cada nivel y +3 s extra por acierto
- **Fortalezas:** Mucho más tiempo para pensar
- **Debilidades:** Velocidad −10 %
- **Stats:** Vel `0.90` · Hitbox `1.00` · +tiempo
- **Señales visuales:** Gafas, bata o actitud intelectual

### 6. En Serio — `en_serio.png` (498×498)
- **Arquetipo:** Concentrado
- **Habilidad:** *Enfoque* — el primer fallo de cada nivel no quita vida
- **Fortalezas:** Perdona un error por nivel
- **Debilidades:** Rígido: el café solo dura la mitad (2,5 s)
- **Stats:** Vel `1.00` · Hitbox `1.00`
- **Señales visuales:** Ceño fruncido, mirada fija

### 7. Espanto — `espanto.png` (456×547)
- **Arquetipo:** Evasivo
- **Habilidad:** *Susto* — si un enemigo llega a 2 casillas, los que estén a ≤ 3 casillas huyen 2 s (enfriamiento 15 s)
- **Fortalezas:** Ahuyenta automáticamente; hitbox −10 %
- **Debilidades:** Nervioso: tras un golpe solo 1,2 s de invulnerabilidad (normal 2 s)
- **Stats:** Vel `1.05` · Hitbox `0.90`
- **Señales visuales:** Ojos muy abiertos, orejas erguidas, expresión de miedo

### 8. Jajaja — `jajaja.png` (266×225)
- **Arquetipo:** Alegre / Apoyo
- **Habilidad:** *Risa contagiosa* — al acertar, velocidad ×1,3 durante 3 s
- **Fortalezas:** Velocidad +5 %; racha veloz al acertar
- **Debilidades:** No se lo toma en serio: −10 % de puntos por acierto
- **Stats:** Vel `1.05` · Hitbox `1.00`
- **Señales visuales:** Boca abierta riendo, ojos cerrados

### 9. Molesto — `molesto.png` (430×580)
- **Arquetipo:** Agresivo
- **Habilidad:** *Gruñido* — los enemigos a ≤ 3 casillas se alejan el 70 % de las veces (no afecta al jefe)
- **Fortalezas:** Intimida; mantiene la zona despejada
- **Debilidades:** Se enoja: fallar resta 3 s extra; hitbox +5 %
- **Stats:** Vel `1.00` · Hitbox `1.05`
- **Señales visuales:** Dientes apretados, cejas bajas

### 10. ¡Huir! — `uir.png` (500×500)
- **Arquetipo:** Escapista
- **Habilidad:** *Huida* — si un enemigo llega a 2 casillas, sprint ×1,5 durante 1,5 s (enfriamiento 10 s)
- **Fortalezas:** Escapa de apuros; se activa sola
- **Debilidades:** Pánico: no se puede activar a voluntad; enfriamiento largo
- **Stats:** Vel `1.00` · Hitbox `1.00`
- **Señales visuales:** Corre con los brazos en alto, gotas de sudor, nubes de polvo
- **Nota:** el nombre del archivo viene de "huir". En el juego la skin se llama "¡Huir!" (id interno `uir`).

### 11. ¡Ups! — `ups.png` (237×225)
- **Arquetipo:** Reflejos
- **Habilidad:** *Tropezón* — 20 % de probabilidad de esquivar cualquier golpe de enemigo
- **Fortalezas:** Esquiva en todos los niveles; hitbox −10 %
- **Debilidades:** Al esquivar se queda quieto 0,4 s; velocidad −5 %
- **Stats:** Vel `0.95` · Hitbox `0.90`
- **Señales visuales:** Lengua fuera, ojos sorprendidos

---

**Implementación:** todas las habilidades están en la sección `// ===== HABILIDADES =====` de `index.html`; los números se ajustan en el objeto `AB`. Las automáticas (Susto, Huida) no necesitan botón, así que funcionan igual con teclado, D-Pad y swipe. El HUD muestra su estado.

**Otros archivos:** `summer_lilostitch_elvis_89aee099.jpeg` es el fondo, no es una skin.
