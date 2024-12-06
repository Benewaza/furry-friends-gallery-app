import DogGallery from "./components/DogGallery";
import Search from "./components/Search";
import { useEffect, useState } from "react";

const App = () => {
  const [numberOfDogs, setNumberOfDogs] = useState(8);
  const [dogsList, setDogsList] = useState([]);
  const [error, setError] = useState(null);

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

  const handleNumberSubmit = (num) => {
    setError("");
    isNaN(num) ? setError("Please enter a number!") : setNumberOfDogs(num);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Search emitNumberOfDogs={(num) => handleNumberSubmit(num)} />
      {error && <div className="text-red-400 text-sm text-center">{error}</div>}
      <DogGallery dogs={dogsList} />
    </div>
  );
};

export default App;
