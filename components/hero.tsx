import Image from "next/image";

import { Header } from "@/components/header";
import pretitleImage from "@/public/assets/hero/pretitle-img.svg";

export const Hero = () => {
  return (
    <section className="min-h-100 lg:min-h-200 bg-cream bg-cover bg-no-repeat lg:bg-hero">
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-100 lg:h-200">
        <div className="lg:max-w-162 mx-auto lg:mx-0 text-center lg:text-left">
          <div className="hidden xl:flex mb-6 ml-5 animate-bounce">
            <Image
              src={pretitleImage}
              alt="Pretitle arrow image"
              className="w-full h-auto"
            />
          </div>
          <h1 className="mb-10 h1">
            A pet first <br />
            <span className="text-orange font-normal">approach to</span> <br />
            wellness
          </h1>
          <button type="button" className="btn btn-orange mx-auto lg:mx-0">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};
