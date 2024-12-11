import { useState } from "react";

const Search = ({ emitNumberOfDogs }) => {
  const [numberOfDogs, setNumberOfDogs] = useState("");
  const handleSubmit = () => {
    emitNumberOfDogs(numberOfDogs);
    setNumberOfDogs("");
  };

  return (
    <section className="py-12 px-4">
      <div className="flex flex-col mx-auto items-center">
        <h1 className="mb-3">Search for pictures of good Doggos</h1>
        <div className="flex">
          <input
            className="w-80 bg-transparent text-sm border border-slate-200 pl-3 py-2 focus:outline-none hover:border-slate-300"
            placeholder="How many dogs should we look for? (max 50)"
            onChange={(e) => setNumberOfDogs(e.target.value)}
            value={numberOfDogs}
          />
          <button
            className="flex items-center bg-green-600 py-2 px-3 border border-transparent text-center text-sm text-white"
            type="button"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
