# 📘 Diseño de Personajes — Stitch Game

> Documento base de diseño. Define **habilidades, fortalezas y debilidades** de cada personaje y skin para guiar la construcción futura del juego.
> Fecha: 2026-11-19

---

## 1. Estado de la carpeta `personajes/`

```
personajes/
├── buenos/
│   ├── stitch/   ✅ 10 imágenes + 1 fondo
│   ├── angel/    ⬜ vacía
│   └── lilo/     ⬜ vacía
└── enemigos/
    ├── Gantu/    ⬜ vacía
    ├── jefes/    ⬜ vacía
    ├── Jumba/    ⬜ vacía
    ├── Pleakley/ ⬜ vacía
    └── Reuben/   ⬜ vacía
```

**Imágenes disponibles hoy (todas variantes de Stitch):**

| Archivo | Tamaño | Variante |
|---|---|---|
| `elvis.png` | 375×666 | Stitch Elvis (traje blanco/dorado) |
| `falda_ulaula.png` | 375×666 | Stitch Hula (falda de hojas + collar) |
| `surfer.png` | 236×416 | Stitch Surfer |
| `genio.png` | 500×500 | Stitch Genio |
| `en_serio.png` | 498×498 | Stitch En Serio |
| `espanto.png` | 456×547 | Stitch Espanto |
| `jajaja.png` | 266×225 | Stitch Jajaja |
| `molesto.png` | 430×580 | Stitch Molesto |
| `uir.png` | 500×500 | Stitch ¡Huir! (corre asustado, gotas de sudor y polvo) |
| `ups.png` | 237×225 | Stitch ¡Ups! |
| `summer_lilostitch_elvis_89aee099.jpeg` | 677×381 | Fondo (no es skin) |

> Las carpetas vacías ya están creadas: cuando agregues imágenes, solo sigue el esquema de la sección 5.

---

## 2. Esquema de diseño (plantilla)

Todo personaje/skin se define con estos campos:

| Campo | Qué describe |
|---|---|
| **Arquetipo** | Rol jugable (tanque, veloz, sigiloso, estratega, caos…) |
| **Habilidad** | Mecánica distintiva con nombre, descripción y efecto en juego |
| **Fortalezas** | 2–3 ventajas claras |
| **Debilidades** | 2–3 contrapartidas reales (para que no sea dominante) |
| **Stats** | `speed` (multiplicador de velocidad), `hitbox` (radio de colisión; menor = más difícil de atrapar), `resistencia` |
| **Señales visuales** | Cómo se reconoce en pantalla (color, accesorio, postura) |
| **Estilo de juego** | Cómo se supone que se juega / cuándo conviene |

**Regla de oro:** ningún personaje debe ser estrictamente mejor que otro. Toda>habilidad fuerte lleva una debilidad equivalente.

---

## 3. Perfiles de personajes

### 🟢 Buenos (jugables / aliados)

#### Stitch — Experimento 626
- **Arquetipo:** Todo-terreno / Cazador equilibrado
- **Habilidad:** la de la skin elegida (ver sección 4). La skin Clásico tiene *Instinto 626*: power-ups +30 %.
- **Fortalezas:** Estadísticas balanceadas; muy versátil; fuerte (4 brazos); resistente.
- **Debilidades:** Impulsivo (se distrae con comida); no sabe nadar bien; depende del café para mantener energía.
- **Stats:** `speed 1.00` · `hitbox 1.00` · `resistencia 1.00`
- **Señales visuales:** Piel azul, orejas grandes, ojos negros, tres mechones.
- **Estilo de juego:** Ideal para aprender; canon de referencia para las demás skins.

#### Angel — Experimento 624
- **Arquetipo:** Veloz / Hipnótica
- **Habilidad — *Canto de sirena*:** +15 % de velocidad; si un enemigo llega a 3 casillas, lo aturde 1,5 s (enfriamiento 12 s, automática).
- **Fortalezas:** Muy rápida; ágil; esquiva; pareja de Stitch.
- **Debilidades:** Frágil (1,2 s de invulnerabilidad tras golpe, en vez de 2 s); el canto tiene enfriamiento.
- **Stats:** `speed 1.15` · `hitbox 1.00`
- **Señales visuales:** Piel rosa, orejas largas, expresión dulce.
- **Estilo de juego:** Correr y esquivar; no aguantar golpes.

#### Lilo
- **Arquetipo:** Inteligente / Sigilosa
- **Habilidad — *Vudú*:** hitbox −15 % y abre una puerta `X` por nivel sin la llave `K`.
- **Fortalezas:** Difícil de atrapar; inteligente; creativa; se camufla.
- **Debilidades:** Lenta (velocidad −8 %).
- **Stats:** `speed 0.92` · `hitbox 0.85`
- **Señales visuales:** Niña humana, vestido rojo, muñeca vudú.
- **Estilo de juego:** Precisión y sigilo en vez de velocidad.

---

### 🔴 Enemigos

#### Gantu
- **Arquetipo:** Tanque / Perseguidor
- **Habilidad — *Persecución implacable*:** Corre tras el jugador cuando lo detecta dentro de 9 casillas.
- **Fortalezas:** Gran tamaño; fuerza bruta; tenaz; resiste golpes.
- **Debilidades:** Lento girando; predecible; torpe en pasillos estrechos; se le engaña fácil.
- **Stats:** `speed 0.90 → 1.25` (según nivel) · radio grande · `resistencia 1.20`
- **Señales visuales:** Gigante morado, uniforme de capitán联邦, ceño fruncido.
- **Estilo de juego:** Presión constante; hay que rodearlo, no enfrentarlo.

#### Jumba
- **Arquetipo:** Científico / Estratega
- **Habilidad — *Conocimiento del experimento*:** Sabe cuál es la zona correcta y se dirige hacia ella.
- **Fortalezas:** Inteligente; calculador; crea experimentos; usa tecnología.
- **Debilidades:** Lento; despistado; su equipo a veces falla; habla demasiado.
- **Stats:** `speed 0.90 → 1.15` · radio mediano · `resistencia 1.00`
- **Señales visuales:** Alien gordo verde, gafas, bata de laboratorio.
- **Estilo de juego:** Caza intelectual; vigila la zona correcta.

#### Pleakley
- **Arquetipo:** Disfraz / Caos
- **Habilidad — *Camuflaje*:** Se mueve al azar y se disfraza; impredecible.
- **Fortalezas:** Nadie sabe dónde aparecerá; sigiloso; engaña al jugador.
- **Debilidades:** Cobarde; mal atleta; se asusta fácil; depende del disfraz.
- **Stats:** `speed 0.85 → 1.15` · radio mediano · `resistencia 0.90`
- **Señales visuales:** Alien delgado verde, uno o dos ojos, ropa femenina de agente.
- **Estilo de juego:** Amenaza aleatoria; mantente alerta.

#### Reuben — Experimento 625
- **Arquetipo:** Vago / Oportunista
- **Habilidad — *Hambre de sándwiches*:** Persigue solo ~55 % del tiempo; se distrae con comida.
- **Fortalezas:** Muy rápido cuando quiere; sigue órdenes de Jumba.
- **Debilidades:** Perezoso; glotón; se distrae; siempre está cansado.
- **Stats:** `speed 1.10 → 1.25` · radio mediano · `resistencia 0.95`
- **Señales visuales:** Stitch rojo/naranja con delantal, sándwich en mano.
- **Estilo de juego:** Ráfagas de velocidad; usa comida contra él.

#### Gran Consejo — Jefe (`jefes`)
- **Arquetipo:** Jefe multiphase
- **Habilidad — *Aura de tres fases*:** F1 morado → F2 rojo → F3 dorado. Cada fase aumenta velocidad y agresividad de la IA.
- **Fortalezas:** 3 fases; aura visible; muy rápido en F3; IA cada vez más agresiva.
- **Debilidades:** Patrón predecible por fase; vulnerable justo al cambiar de aura; necesita cargar el ataque.
- **Stats:** `speed` escalado por fase · radio `ts*0.44` · `resistencia 1.50`
- **Señales visuales:** Aura de color por fase, etiqueta `F1/F2/F3` sobre la cabeza.
- **Estilo de juego:** Completa preguntas antes de que la fase 3 te alcance.

#### Nani
- **Estado:** Solo mencionada en el nombre del nivel 2 (*Casa de Lilo y Nani*). No es jugable ni enemigo. Perfil pendiente si se decide añadirla.

---

## 4. Perfiles de skins (variantes de Stitch)

Todas usan la base de Stitch (speed 1.00 / hitbox 1.00) con un ajuste pequeño y una habilidad temática. **Ninguna es estrictamente superior.**

| # | Skin (archivo) | Habilidad (implementada) | Fortalezas | Debilidades | speed · hitbox |
|---|---|---|---|---|---|
| 0 | **Clásico** (procedural; futura `clasico.png`) | *Instinto 626* — café y ukelele duran +30 % (café 6,5 s, ukelele 3,9 s) | Saca más de los power-ups; stats neutros | Sin habilidad defensiva; depende de encontrar power-ups | 1.00 · 1.00 |
| 1 | **Elvis** (`elvis.png`) | *Rock Star* — el traje absorbe el primer golpe de enemigo de cada nivel | Un golpe gratis por nivel; imponente | Velocidad −5 %; hitbox +5 % | 0.95 · 1.05 |
| 2 | **Hula** (`falda_ulaula.png`) | *Danza Hula* — 30 % de probabilidad de esquivar un golpe en Playa y Luau | Velocidad +5 %; hitbox −5 % | Sin esquiva fuera de Playa/Luau | 1.05 · 0.95 |
| 3 | **Surfer** (`surfer.png`) | *Ola* — velocidad +15 % extra en Playa y Luau | Velocidad base +10 %; rapidísimo en la playa | −10 % de velocidad en interiores (Casa, Nave, Estación) | 1.10 · 1.00 |
| 4 | **Genio** (`genio.png`) | *Mente brillante* — +10 s al empezar cada nivel y +3 s extra por acierto | Mucho más tiempo para pensar | Velocidad −10 % | 0.90 · 1.00 |
| 5 | **En Serio** (`en_serio.png`) | *Enfoque* — el primer fallo de cada nivel no quita vida | Perdona un error por nivel | Rígido: el café solo dura la mitad (2,5 s) | 1.00 · 1.00 |
| 6 | **Espanto** (`espanto.png`) | *Susto* — si un enemigo llega a 2 casillas, los que estén a ≤ 3 casillas huyen 2 s (enfriamiento 15 s) | Ahuyenta automáticamente; hitbox −10 % | Nervioso: tras un golpe solo 1,2 s de invulnerabilidad (normal 2 s) | 1.05 · 0.90 |
| 7 | **Jajaja** (`jajaja.png`) | *Risa contagiosa* — al acertar, velocidad ×1,3 durante 3 s | Velocidad +5 %; racha veloz al acertar | No se lo toma en serio: −10 % de puntos por acierto | 1.05 · 1.00 |
| 8 | **Molesto** (`molesto.png`) | *Gruñido* — los enemigos a ≤ 3 casillas se alejan el 70 % de las veces (no afecta al jefe) | Intimida; mantiene la zona despejada | Se enoja: fallar resta 3 s extra; hitbox +5 % | 1.00 · 1.05 |
| 9 | **¡Huir!** (`uir.png`) | *Huida* — si un enemigo llega a 2 casillas, sprint ×1,5 durante 1,5 s (enfriamiento 10 s) | Escapa de apuros; se activa sola | Pánico: no se puede activar a voluntad; enfriamiento largo | 1.00 · 1.00 |
| 10 | **¡Ups!** (`ups.png`) | *Tropezón* — 20 % de probabilidad de esquivar cualquier golpe de enemigo | Esquiva en todos los niveles; hitbox −10 % | Al esquivar se queda quieto 0,4 s; velocidad −5 % | 0.95 · 0.90 |

**Nota:** `uir.png` = "huir": Stitch sale corriendo asustado. Todas las habilidades están implementadas; los números viven en el objeto `AB` de `index.html`.

---

## 5. Guía para construir personajes/skins futuros

1. **Crea la carpeta** en `personajes/buenos/<id>/` o `personajes/enemigos/<id>/`.
2. **Agrega la imagen** con fondo transparente (PNG), centrada, 256–512 px.
3. **Regístrala** en `ASSET_MAP` dentro de `index.html`.
4. **Define el perfil** con el esquema de la sección 2 (arquetipo, habilidad, fortalezas, debilidades, stats, señales visuales, estilo de juego).
5. **Equilibra:** toda ventaja lleva una contrapartida.
6. **Dale señales visuales claras** para que se reconozca en el laberinto a simple vista.
7. **Prueba** en aventura (7 niveles) y supervivencia (oleadas).

---

## 6. Implementación en el juego

Los perfiles están codificados en `index.html` como:

- `CHAR_PROFILES` — datos de habilidades/fortalezas/debilidades de los 8 personajes.
- `SKIN_PROFILES` — datos de las 11 skins de Stitch.
- `SKINS` — lista ampliada con las imágenes reales de `personajes/buenos/stitch/`.

La pantalla de selección muestra la ficha de cada personaje/skin (habilidad, fortalezas, debilidades) para que el jugador conozca las diferencias antes de elegir.
