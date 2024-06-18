import { useState } from "react";
import Card from "./componentes/Card/Card.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const tutorialData = [
    {
      titulo: "Dedica moltes hores",
      descripcion:
        "Un minim de 30 hores a la setmana. Si no en tens prou, hauras de dedicar-li mes hores. Al principi sembla impossible, pero notaras una millora rapidament.",
      bgColor: "",
      imagen: "",
    },
  ];

  return (
    <>
      <div>
        <Card
          titulo={tutorialData[0].titulo}
          descripcion={tutorialData[0].descripcion}
          bgColor={tutorialData[0].bgColor}
          imagen={tutorialData[0].imagen}
        />
      </div>
    </>
  );
}

export default App;
