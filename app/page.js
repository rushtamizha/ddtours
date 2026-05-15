import AboutUs from "@/components/About";
import HeroWithForm from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import HoneymoonHero from "@/components/SubHero";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <HeroWithForm/>
    <Packages/>
    <Services/>
    <HoneymoonHero/>
    <WhyChooseUs/>
    <AboutUs/>
    <Testimonials/>
    </>
  );
}
