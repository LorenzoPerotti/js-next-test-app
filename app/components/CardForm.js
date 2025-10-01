"use client";
import { useState } from "react";
import "./CardForm.css";
import "./Toggle.css";

function clearField(setter, field) {
  setter((prev) => ({ ...prev, [field]: "" }));
}

function getRandomPicsumUrl() {
  const randomSize = 200 + Math.floor(Math.random() * 800);
  return `https://picsum.photos/${randomSize}`;
}

function isValidCard({ title, src, text }) {
  return title.trim() && src.trim() && text.trim();
}

export default function CardForm({ onAddCard }) {
  const [card, setCard] = useState({
    title: "",
    src: "",
    text: "",
    isNice: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(card);
    setCard({ title: "", src: "", text: "", isNice: false });
  };

  const handleAutofill = () => {
    setCard((prev) => ({ ...prev, src: getRandomPicsumUrl() }));
  };

  const formValid = isValidCard(card);

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Title"
            value={card.title}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          {card.title && (
            <button
              type="button"
              className="icon-btn clear-btn"
              onClick={() => clearField(setCard, "title")}
              title="Clear"
            >
              ×
            </button>
          )}
        </div>

        {/* Image URL + autofill */}
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Image URL"
            value={card.src}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, src: e.target.value }))
            }
          />
          {card.src && (
            <button
              type="button"
              className="icon-btn clear-btn"
              onClick={() => clearField(setCard, "src")}
              style={{ right: "64px" }}
              title="Clear"
            >
              ×
            </button>
          )}
          <button
            type="button"
            className="icon-btn autofill-btn"
            onClick={handleAutofill}
            title="Use random Picsum image"
          >
            📷
          </button>
        </div>

        {/* Description */}
        <div className="input-wrapper">
          <textarea
            placeholder="Description"
            value={card.text}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, text: e.target.value }))
            }
          />
          {card.text && (
            <button
              type="button"
              className="icon-btn clear-btn"
              onClick={() => clearField(setCard, "text")}
              title="Clear"
            >
              ×
            </button>
          )}
        </div>

        {/* Toggle */}
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={card.isNice}
              onChange={() =>
                setCard((prev) => ({ ...prev, isNice: !prev.isNice }))
              }
            />
            <span className="slider"></span>
          </label>
          <span className="toggle-label">Is Nice?</span>
        </div>

        {/* Submit */}
        <button type="submit" disabled={!formValid}>
          Add Card
        </button>
      </form>
    </div>
  );
}
