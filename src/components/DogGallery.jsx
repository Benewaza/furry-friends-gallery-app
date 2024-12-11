import DogCard from "./DogCard";

const DogGallery = ({ dogs, dogsTotal }) => {
  return (
    <section className="p-4">
      <div className="border-t-[1px] py-8">
        {dogs.length > 0 && (
          <p className="text-center">All time puppers found = {dogsTotal}</p>
        )}
      </div>
      <div className="max-w-[300px] grid sm:grid-cols-2 sm:max-w-full md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        {dogs.map((dog, index) => (
          <DogCard dog={dog} key={index} />
        ))}
      </div>
    </section>
  );
};

export default DogGallery;
