import React, { useState } from "react";
import { Helmet } from "react-helmet";
import UseAllTrainers from "../../Hooks/UseAllTrainers";

export default function AllClasses() {
  const [allTrainers] = UseAllTrainers();
  const [sortedTrainers, setSortedTrainers] = useState(allTrainers);
  const [isAscending, setIsAscending] = useState(true);

  // Sorting function
  const handleSort = () => {
    const sorted = [...sortedTrainers].sort((a, b) => {
      // Sorting based on the first class name of each trainer
      const classA = a.trainerClasses[0]?.className || "";
      const classB = b.trainerClasses[0]?.className || "";

      return isAscending
        ? classA.localeCompare(classB)
        : classB.localeCompare(classA);
    });

    setSortedTrainers(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="w-11/12 mx-auto md:px-10 pt-28 pb-20 bg-white text-black dark:bg-gray-900 dark:text-white shadow-2xl mt-10 mb-20">
      <Helmet>
        <title>Home | All Classes</title>
      </Helmet>
      
      <h1 className="text-center underline text-4xl font-bold mb-8 py-10">
        All Classes
      </h1>

      {/* Sort Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sort by Class Name ({isAscending ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {sortedTrainers.map((trainer) => (
          <div
            key={trainer._id}
            className="border shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold">Trainer: {trainer.name}</h2>
            <div className="mt-4 space-y-2">
              <p className="text-lg font-bold">Class Name</p>
              {trainer.trainerClasses.map((classes, i) => (
                <p key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {classes.className}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
