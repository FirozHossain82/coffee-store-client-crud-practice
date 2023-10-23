import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard.jsx";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className="text-5xl text-purple-400 font-serif text-center mb-8  ">
        Hot & Cold Coffee: {coffees.length}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard 
          key={coffee._id}
           coffee={coffee}
           coffees={coffees}
           setCoffees={setCoffees}
           ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
