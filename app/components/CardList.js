"use client";

import { useState } from "react";
import Card from "./Card";
import "./CardList.css";

export default function CardList({ cards }) {
  const [showNiceOnly, setShowNiceOnly] = useState(false);

  const visibleCards = showNiceOnly
    ? cards.filter((card) => card.isNice)
    : cards;

  return (
    <>
      {/* Toggle Switch */}
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={showNiceOnly}
            onChange={() => setShowNiceOnly((prev) => !prev)}
          />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">
          {showNiceOnly ? "Only Nice" : "All Cards"}
        </span>
      </div>

      {/* Cards List */}
      <div className="card-grid">
        {visibleCards.map((card, index) => (
          <Card
            key={card.title + index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            text={card.text}
            isNice={card.isNice}
          />
        ))}
      </div>
    </>
  );
}
