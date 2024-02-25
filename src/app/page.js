import Hero from "@/pages/home/Hero";
import Course from "@/pages/home/Course";
import Quote from "@/pages/home/Quote";
import Learner from "@/pages/home/Learner";
import TakeNext from "@/pages/home/Takenext";
import OurBlog from "@/pages/home/Ourblog";
export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Course />
      <Quote />
      <Learner />
      <TakeNext />
      <OurBlog />
    </div>
  );
}
