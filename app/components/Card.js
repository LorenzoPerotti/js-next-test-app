import "./Card.css";

function cardClick(title) {
  alert(title + " clicked!");
}

export default function Card({ src, alt, title, text, isNice }) {
  const niceSpan = isNice ? "👍 That's a nice image!" : "😒 Not nice!";

  return (
    <div className="card" onClick={() => cardClick(title)}>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <div className="card-image-wrapper">
          <img className="card-image" src={src} alt={alt} />
        </div>
        <p className="card-text">{text}</p>
        <p className="card-text">{niceSpan}</p>
      </div>
    </div>
  );
}
