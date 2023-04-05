import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Partners />
      <Footer/>
    </>
  );
}
