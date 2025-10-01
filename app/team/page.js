// app/team/page.tsx (Server Component, no "use client")
"use client";
import TopBar from "../components/Topbar";
import CardList from "../components/CardList";
import CardForm from "../components/CardForm";
import { useState } from "react";

export default function Team() {
  const [cards, setCards] = useState([
    {
      src: "https://picsum.photos/200",
      title: "Image 1",
      text: "Description 1",
      isNice: true,
    },
    {
      src: "https://picsum.photos/201",
      title: "Image 2",
      text: "Description 2",
    },
    {
      src: "https://picsum.photos/202",
      title: "Image 3",
      text: "Description 3",
      isNice: true,
    },
    {
      src: "https://picsum.photos/203",
      title: "Image 4",
      text: "Description 4",
    },
  ]);

  // this is passed to the CardForm component as a prop and is called when a new card is added
  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <>
      <TopBar title="Team" />
      <CardForm onAddCard={addCard} />
      <CardList cards={cards} />
    </>
  );
}
