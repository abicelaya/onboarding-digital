import { useState } from "react";
import Card from "./componentes/Card/Card.jsx";
import TimeManagmentImage from "./img/time_managment.svg";
import ProgrammingImage from "./img/programming.svg";
import MeditationImage from "./img/meditation.svg";

import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  const tutorialData = [
    {
      titulo: "Dedica moltes hores",
      descripcion:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#0097A7",
      imagen: TimeManagmentImage,
    },
    {
      titulo: "Programa projectes propis",
      descripcion:
        "Més val 10 hores traballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#D5D8DC",
      imagen: ProgrammingImage,
    },
    {
      titulo: "Procura descansar",
      descripcion:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#FFD54F",
      imagen: MeditationImage,
    },
  ];

  let hasPrev = step > 0;
  let hasNext = step < tutorialData.length - 1;

  function prevStep() {
    if (hasPrev) {
      setStep(step - 1);
    }
  }

  function nextStep() {
    if (hasNext) {
      setStep(step + 1);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card
          imagen={tutorialData[step].imagen}
          titulo={tutorialData[step].titulo}
          descripcion={tutorialData[step].descripcion}
          bgColor={tutorialData[step].bgColor}
          irAlAnteriorPaso={hasPrev ? prevStep : null}
          irAlSiguientePaso={hasNext ? nextStep : null}
        />
      </div>
    </>
  );
}

export default App;
