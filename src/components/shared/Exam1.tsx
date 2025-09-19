import { Button } from "@heroui/react";

function Exam1() {
  const cards = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 1 description",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 2 description",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 3 description",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 4 description",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 5 description",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
    {
      id: 12,
      img: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
      desc: "This is card 6 description",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cards */}
      <main className=" px-6 py-8 grid grid-cols-4 gap-6 mt-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" bg-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow border"
          >
            <img
              src={card.img}
              alt="demo"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">{card.desc}</p>
            </div>
            <div className="relative">
              <Button className="border absolute bottom-2 right-25" >Add</Button>
              <Button className="border absolute bottom-2 right-2" >Delete</Button>
            </div>
          </div>
          
        ))}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4">
        © 2025 Demo Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Exam1;
