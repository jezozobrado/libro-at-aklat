import BooksImage from "../../../public/images/get-a-book.webp";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div>
      <Image
        src={BooksImage}
        alt="Hero Image"
        className="flex m-auto z-40 mt-10 relative"
      />
      <div className="w-full bg-slate-950 h-[500px] relative bottom-[400px] z-0 -mb-72" />
    </div>
  );
};

export default HeroImage;
