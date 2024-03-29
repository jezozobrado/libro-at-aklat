import HeroText from "./components/HeroText";
import Hero from "./components/home/Hero";
import HeroImage from "./components/home/HeroImage";
import Steps from "./components/home/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroImage />
      <HeroText
        header="We're freak between sheets."
        subtitle="Be part of this wholesome bookclub ;)"
      />
      <Steps />
    </>
  );
}
