import React from "react";
import DogGallery from "./components/DogGallery";
import Search from "./components/Search";
import { useEffect, useState } from "react";


const App = () => {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(8);
  const [dogsFoundTotal, setDogsFoundTotal] = useState<number>(8);
  const [dogsList, setDogsList] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
        );
        if (!response.ok) throw new Error(`Status: ${response.status} `);
        const data = await response.json();
        setDogsList(data.message);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch dogs. Please try again.");
      }
    };
    fetchDogs();
  }, [numberOfDogs]);

  const handleNumberSubmit = (num: string) => {
    setError("");
    if (isNaN(Number(num))) {
      setError("Please enter a number!");
    } else {
      const parsedNum = Number(num);
      setNumberOfDogs(parsedNum);
      setDogsFoundTotal(dogsFoundTotal + parsedNum);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Search emitNumberOfDogs={(num: string) => handleNumberSubmit(num)} />
      {error && <div className="text-red-400 text-sm text-center">{error}</div>}
      <DogGallery dogs={dogsList} dogsTotal={dogsFoundTotal} />
    </div>
  );
};

export default App;
