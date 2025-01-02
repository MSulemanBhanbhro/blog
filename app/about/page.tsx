import React from 'react';
import { BiAnalyse } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { SiBoosty } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";


const About = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-20">About Premium AI Blog</h1>
      <div className="w-11/12 md:w-3/4 mx-auto my-10">
        <h1 className="text-2xl text-justify mt-7">
          Welcome to Premium AI Blog, your go-to source for cutting-edge insights into the world of Artificial Intelligence. Our mission is to demystify AI, explore its potential, and discuss its impact on various aspects of our lives and industries.
        </h1>
        <h1 className="text-2xl text-justify mt-7">
          Founded by a team of AI enthusiasts, researchers, and industry experts, we strive to bring you the most accurate, up-to-date, and thought-provoking content about AI and its related fields.
        </h1>
        <h1 className="text-2xl text-justify mt-7">
          Whether you &rsquo;re a seasoned AI professional, a curious student, or simply someone interested in the future of technology, our blog offers valuable insights, practical guides, and engaging discussions to expand your understanding of AI.
        </h1>
      </div>

      <h1 className="text-3xl font-bold text-center my-20">What We Offer</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6  p-6">
        <div className="bg-[#F9FAFB] flex flex-col p-4 rounded-md shadow-md">
          <BiAnalyse size={30} className="mb-2" />
          <h1 className="text-2xl font-bold my-2">In-depth Analysis</h1>
          <p>We dive deep into AI technologies, providing comprehensive analyses of the latest advancements and their potential applications.</p>
        </div>

        <div className="bg-[#F9FAFB] flex flex-col p-4 rounded-md shadow-md">
          <FaUserFriends size={30} className="mb-2" />
          <h1 className="text-2xl font-bold my-2">Expert Insights</h1>
          <p>Our team of experts shares their knowledge and experiences, offering unique perspectives on the AI landscape.</p>
        </div>

        <div className="bg-[#F9FAFB] flex flex-col p-4 rounded-md shadow-md">
          <SiBoosty size={30} className="mb-2" />
          <h1 className="text-2xl font-bold my-2">Industry Impact</h1>
          <p>We explore how AI is transforming various industries, from healthcare and finance to education and entertainment.</p>
        </div>

        <div className="bg-[#F9FAFB] flex flex-col p-4 rounded-md shadow-md">
          <RiGlobalLine size={30} className="mb-2" />
          <h1 className="text-2xl font-bold my-2">Future Trends</h1>
          <p>Stay ahead of the curve with our predictions and analysis of emerging trends in the world of AI.</p>
        </div>
      </div>
      
    </>
  );
};

export default About;
