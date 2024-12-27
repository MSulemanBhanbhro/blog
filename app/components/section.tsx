import React from "react";
import { SiBoosty } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";

const Sections = () => {
  const sections = [
    {
      id: 1,
      title: "Cognitive Revolution",
      icon: <SiBoosty size={70} />,
      description:
        "AI is reshaping how we think about intelligence and cognition, pushing the boundaries of what's possible.",
    },
    {
      id: 2,
      title: "Efficiency Boost",
      icon: <SiBoosty size={70} />,
      description:
        "From automation to predictive analytics, AI is dramatically increasing efficiency across industries.",
    },
    {
      id: 3,
      title: "Global Impact",
      icon: <RiGlobalLine size={70} />,
      description:
        "AI has the potential to solve some of the world's most pressing challenges, from climate change to healthcare.",
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">Why AI Matters</h1>
      <div className="w-full h-auto flex flex-col md:flex-row md:flex-wrap justify-center gap-6 p-4 my-8">
        {sections.map((item) => (
          <div
            className="w-full sm:w-[48%] md:w-[33%] lg:w-[32%] h-auto p-8 border rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
            key={item.id}
          >
            <div>{item.icon}</div>
            <div className="text-center my-6">
              <h1 className="text-xl md:text-2xl font-bold">{item.title}</h1>
              <p className="py-2 text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sections;
