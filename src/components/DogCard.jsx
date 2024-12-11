import React from "react";

const DogCard = ({ dog }) => {
  const dogBreed = (dog) => {
    // manipulate url string to retrieve breed information
    const breed = dog.substring(dog.indexOf("breeds")).split("/")[1];

    // either return the breed or remove '-', reverse then return string in correct order
    return breed.indexOf("-") > -1
      ? breed.split("-").reverse().join(" ")
      : breed;
  };

  return (
    <div className="bg-white p-4 shadow-lg border rounded-sm max-w-xs">
      <img
        className="w-full rounded-sm mb-2 h-[200px] object-cover object-top"
        src={dog}
        alt={`Picture of ${dogBreed(dog)}`}
      />
      <span className="font-semibold text-sm">Breed: {dogBreed(dog)}</span>
    </div>
  );
};

export default DogCard;
