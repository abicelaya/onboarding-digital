export default function Card({ titulo, descripcion, bgColor, imagen }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      {imagen && <img src={imagen} alt={titulo} />}
    </div>
  );
}
