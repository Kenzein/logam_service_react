import Navbar from "../../features/navbar/Navbar";
import Hero from "../../features/hero/Hero";
import About from "../../features/about/About";
import Service from "../../features/services/Services";
import Review from "../../features/reviews/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Review />
    </>
  );
}
