import "./Card.css";

export default function Card({
  titulo,
  descripcion,
  bgColor,
  imagen,
  irAlSiguientePaso,
}) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      {imagen && (
        <img src={imagen} className="card-img-top imagen" alt={titulo} />
      )}
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <div id="boton">
          <button
            className="btn btn-dark btn-circle btn-icon"
            onClick={irAlSiguientePaso}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
