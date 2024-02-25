import Hero from "@/pages/home/Hero";
import Course from "@/pages/home/Course";
import Quote from "@/pages/home/Quote";
import Learner from "@/pages/home/Learner";
export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Course />
      <Quote />
      <Learner />
      <div>ABC</div>
    </div>
  );
}
