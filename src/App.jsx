import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const carddata = [
    {
      id: 1,
      image: "pic1.svg",
      star: 5,
      rating: 6,
      content: "Life lessons with Katie Zaferes",
      price: 136,
      openspots: 0,
      online: false,
    },
    {
      id: 2,
      image: "pic2.svg",
      star: 2,
      rating: 4,
      content: "Life teaches a lesson with difficulty",
      price: 120,
      openspots: 1,
      online: true,
    },
    {
      id: 3,
      image: "pic1.svg",
      star: 1,
      rating: 2,
      content: "react is teh newest language",
      price: 90,
      openspots: 1,
      online: false,
    },
  ];
  return (
    <>
      <div className=" m-auto w-[550px] h-[853px] ">
        <Navbar />
        <Hero />
        <section className="flex">
          {carddata.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
