import { createGlobalStyle } from "styled-components";

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
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      123456789
    </>
  );
}

export default App;
