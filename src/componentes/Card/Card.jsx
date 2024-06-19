import "./Card.css";
import Indicador from "../Indicador/Indicador.jsx";

export default function Card({
  titulo,
  descripcion,
  bgColor,
  imagen,
  irAlAnteriorPaso,
  irAlSiguientePaso,
  tutorialData,
  step,
}) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      {imagen && (
        <img src={imagen} className="card-img-top imagen" alt={titulo} />
      )}
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>

        <div className="contenedor-footer-card">
          <Indicador tutorialData={tutorialData} step={step} />
          <div id="boton">
            {irAlAnteriorPaso && (
              <button
                className="btn btn-white btn-circle btn-icon boton-izquierdo"
                onClick={irAlAnteriorPaso}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
            )}
            {irAlSiguientePaso && (
              <button
                className="btn btn-dark btn-circle btn-icon boton-derecho"
                onClick={irAlSiguientePaso}
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
