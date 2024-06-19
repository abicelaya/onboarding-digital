import "./Indicador.css";

export default function Indicador({ tutorialData, step }) {
  return (
    <div className="indicador">
      {tutorialData.map((_, index) => (
        <p className={index == step ? "actual" : "no-actual"} key={index}></p>
      ))}
    </div>
  );
}
