import { useState } from "react";
import Card from "./componentes/Card/Card.jsx";

import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }
  const tutorialData = [
    {
      titulo: "Dedica moltes hores",
      descripcion:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#FFFFFF",
      imagen: "",
    },
    {
      titulo: "Programa projectes propis",
      descripcion:
        "Més val 10 hores traballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#FFFFFF",
      imagen: "",
    },
    {
      titulo: "Procura descansar",
      descripcion:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#FFFFFF",
      imagen: "",
    },
  ];

  return (
    <>
      <div>
        <Card
          titulo={tutorialData[step].titulo}
          descripcion={tutorialData[step].descripcion}
          bgColor={tutorialData[step].bgColor}
          imagen={tutorialData[step].imagen}
          irAlSiguientePaso={nextStep}
        />
      </div>
    </>
  );
}

export default App;
