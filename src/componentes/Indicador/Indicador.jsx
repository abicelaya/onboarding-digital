import "./Indicador.css";

export default function Indicador({ tutorialData, step, goToPhrase }) {
  return (
    <div className="indicador">
      {tutorialData.map((_, index) => (
        <p
          className={index == step ? "actual" : "no-actual"}
          onClick={() => goToPhrase(index)}
          key={index}
        ></p>
      ))}
    </div>
  );
}
