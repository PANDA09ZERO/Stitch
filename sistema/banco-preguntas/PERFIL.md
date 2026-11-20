# 📚 Banco de preguntas — Vocabulario de inglés

**Carpeta:** `sistema/banco-preguntas/`
**Tipo:** Contenido educativo
**Cantidad:** **387 preguntas**: 310 de vocabulario, 36 frases útiles y 41 de gramática
**Tema:** Vocabulario inglés → español (NO sobre Lilo & Stitch)

---

## Ficha

| Campo | Detalle |
|---|---|
| **Formato** | `RAW_QUESTIONS` → filas `[palabra, correcta, distr1, distr2, distr3]` |
| **Generación** | `QUESTIONS` mezcla las 4 opciones y calcula `c` (índice correcto) |
| **Categorías** | Comida, animales, colores, familia, objetos, verbos, cuerpo, ropa, lugares, clima, adjetivos |
| **Sin repeticiones** | Baraja `questionDeck` + conjunto `usedQuestions` |
| **Categorías nuevas** | `RAW_PHRASES` (frases, dificultad 2) y `RAW_GRAMMAR` (completar la frase, dificultad 2–3). El panel muestra 📗 vocabulario, 💬 frase o ✏️ gramática |
| **Dificultad** | Cada pregunta tiene `d` (1–3). Vocabulario: palabra de ≤ 4 letras = 1, de 5–6 = 2, de ≥ 7 = 3 (136 / 131 / 43) |
| **Reinicio** | Al agotar las 387, se limpia `usedQuestions` y se vuelve a mezclar |
| **Por partida** | `startGame()` reinicia `questionDeck=[]` y `usedQuestions.clear()` |

---

## Funcionamiento técnico

```js
function takeQuestions(n){
  const out=[];
  while(out.length<n){
    if(!questionDeck.length){
      let fresh=shuffleArr(QUESTIONS).filter(q=>!usedQuestions.has(q));
      if(!fresh.length){ usedQuestions.clear(); fresh=shuffleArr(QUESTIONS); }
      questionDeck=fresh;
    }
    const q=questionDeck.shift();
    out.push(q); usedQuestions.add(q);
  }
  return out;
}
```

- `loadLevel()` pide `L.questions` preguntas (en supervivencia: `min(3+floor(wave/2), L.questions)`).
- `setupQuestion()` mezcla visualmente las opciones entre las zonas A/B/C/D.

---

## Diseño de balance

- **Fortalezas:** Gran variedad para no repetir; respuestas correctas repartidas en las 4 zonas; vocabulario útil para estudiantes.
- **Debilidades:** Al agotar el banco vuelven a aparecer preguntas (esperable); todas son de vocabulario, no de gramática.
- **Consejo:** Ampliar `RAW_QUESTIONS` con más categorías (verbos en pasado, preposiciones, etc.).

---

## Pendiente

- [x] Categorías de frases (36) y gramática (41). Las respuestas son cortas para que quepan en las zonas.
- [x] Dificultad progresiva: `questionRange()` da el rango por nivel (Playa: solo fáciles; Casa y Nave: 1–2; Luau en adelante: 2–3) y por oleada (1–2: fáciles; 3–5: 1–2; 6–9: 2–3; 10+: difíciles). `takeQuestions(n, rango)` toma la primera pregunta de la baraja dentro del rango y, si no quedan, cualquiera sin repetir. Se sigue sin repetir preguntas (probado: 350 seguidas, 0 repetidas).
