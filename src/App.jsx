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
      title: "Dedica moltes hores",
      desciption:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#0097A7",
      image: TimeManagmentImage,
    },
    {
      title: "Programa projectes propis",
      desciption:
        "Més val 10 hores traballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#D5D8DC",
      image: ProgrammingImage,
    },
    {
      title: "Procura descansar",
      desciption:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#FFD54F",
      image: MeditationImage,
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

  function showPhrase(stepPhrase) {
    setStep(stepPhrase);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card
          image={tutorialData[step].image}
          title={tutorialData[step].title}
          desciption={tutorialData[step].desciption}
          bgColor={tutorialData[step].bgColor}
          goToPrevStep={hasPrev ? prevStep : null}
          goToNextStep={hasNext ? nextStep : null}
          tutorialData={tutorialData}
          step={step}
          goToPhrase={showPhrase}
        />
      </div>
    </>
  );
}

export default App;
