import Footer from "@/components/Footer";
import HeroWithForm from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import HoneymoonHero from "@/components/SubHero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroWithForm/>
    <Packages/>
    <Services/>
    <HoneymoonHero/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
