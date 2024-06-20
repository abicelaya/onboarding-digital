import "./Card.css";
import Indicador from "../Indicador/Indicador.jsx";

export default function Card({
  title,
  desciption,
  bgColor,
  image,
  goToPrevStep,
  goToNextStep,
  tutorialData,
  step,
  goToPhrase,
}) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      {image && (
        <img src={image} className="card-img-top imagen" alt={title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desciption}</p>

        <div className="contenedor-footer-card">
          <Indicador
            tutorialData={tutorialData}
            step={step}
            goToPhrase={goToPhrase}
          />
          <div id="boton">
            {goToPrevStep && (
              <button
                className="btn btn-white btn-circle btn-icon boton-izquierdo"
                onClick={goToPrevStep}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
            )}
            {goToNextStep && (
              <button
                className="btn btn-dark btn-circle btn-icon boton-derecho"
                onClick={goToNextStep}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
