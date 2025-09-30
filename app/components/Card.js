import "./Card.css";

export default function Card({ src, alt, title, text }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <div className="card-image-wrapper">
          <img className="card-image" src={src} alt={alt} />
        </div>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
