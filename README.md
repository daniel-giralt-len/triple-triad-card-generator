# Generador de cartes Triple Triad

## 1. Agafar les cartes
Cada carta ha d'estar en una línia d'un CSV amb aquests atributs en aquest ordre
- Nom: apareix a sota a l'esquerra
- Tipus: apareix com a logo a dalt a la dreta
- Amunt, Avall, Dreta, Esquerra: els números de la carta, posats en rombe a baix a la dreta. Cada número va de l'1 al 9
- Raresa: estrelles a dalt a l'esquerra. Va de l'1 al 5

1. Si estàs fent servir sheets, exporta-la a csv: Arxiu > Descarregar > (.csv)
2. Posa'l a `./data` com a `cardList.csv`

## 2. Posar les caràtules
Per cada carta, cal posar una imatge .png amb el nom de la carta a data/avatars.

Les imatges han de fer un aspecte de 8 píxels d'ample per cada 10 píxels d'alt; potser les has de retallar amb un editor d'imatges

## 3. Posar els logos dels tipus
Per a cada tipus, cal posar una imatge .png amb el seu nom a data/typeLogos.

L'aspecte d'aquestes imatges són d'un 1:1.

## 4. Generar les cartes

Obre `index.html`

# Vols canviar les estrelles o el marc?

- Estrella: substitueix el fitxer: `assets/star.png`. Aspect ratio 4:5 (per exemple 800x1000px)
- Marc: substitueix el fitxer: `assets/frame.png`. Aspect ratio 1:1 (per exemple 500x500px)