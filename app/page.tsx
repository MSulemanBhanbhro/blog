import BlogCard from "./components/blogCard";
import Hero from "./components/hero";
import Contact from "./components/informed";
import Sections from "./components/section";



export default function Home() {
  return (
    <>
       <main className="w-[90%] mx-auto">
      <Hero />
      <BlogCard />
      <Sections />
      <Contact />
      
  </main>
    </>
  );
}
