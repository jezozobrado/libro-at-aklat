import Hero from "./components/home/Hero";
import HeroImage from "./components/home/HeroImage";
import Steps from "./components/home/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroImage />
      <HeroText
        header=" Books are our jam."
        subtitle=" Choose from a curated selection of the best new hardcovers and
        audiobooks every month."
      />
      <Steps />
    </>
  );
}
