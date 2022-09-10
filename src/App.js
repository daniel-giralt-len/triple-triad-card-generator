import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import getCards from './csvReader'
import Card from './Card'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "MiedingerW01-Bold";
    font-size: 1em;
    @font-face {
      font-family: "MiedingerW01-Bold";
      src: url("//db.onlinewebfonts.com/t/db8811fcaea2386d4f6e3bcf7e6d206b.eot");
      src: url("//db.onlinewebfonts.com/t/db8811fcaea2386d4f6e3bcf7e6d206b.eot?#iefix") format("embedded-opentype"),
        url("//db.onlinewebfonts.com/t/db8811fcaea2386d4f6e3bcf7e6d206b.woff2") format("woff2"),
        url("//db.onlinewebfonts.com/t/db8811fcaea2386d4f6e3bcf7e6d206b.woff") format("woff"),
        url("//db.onlinewebfonts.com/t/db8811fcaea2386d4f6e3bcf7e6d206b.ttf") format("truetype"),
        url("//db.onlinewebfonts.com/t/db8811fcaea2386d4f6e3bcf7e6d206b.svg#MiedingerW01-Bold") format("svg");
    }
    color: #f5f6ff;
    text-shadow: 0 0 0.5em #474747, 0 0 0.5em #474747, 0 0 0.5em #474747;
  }
  
`;

function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    getCards().then(cards => setCards(cards))
  }, [])
  return (
    <>
      <GlobalStyle />
      {cards.map(c=>(<Card key={c.name} {...c} />))}
    </>
  );
}

export default App;
