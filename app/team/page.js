import TopBar from "../components/Topbar";
import Card from "../components/Card";
import "./page.css";

export default function Team() {
  const cards = [
    {
      src: "https://picsum.photos/200",
      alt: "Image number 1",
      title: "Image 1",
      text: "Description for image 1",
    },
    {
      src: "https://picsum.photos/201",
      alt: "Image number 2",
      title: "Image 2",
      text: "Description for image 2",
    },
    {
      src: "https://picsum.photos/202",
      alt: "Image number 3",
      title: "Image 3",
      text: "Description for image 3",
    },
    {
      src: "https://picsum.photos/203",
      alt: "Image number 4",
      title: "Image 4",
      text: "Description for image 4",
    },
  ];

  return (
    <>
      <TopBar title={"Team"} />
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.title}
            src={card.src}
            alt={card.alt}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </>
  );
}
