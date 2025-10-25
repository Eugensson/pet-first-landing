import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Newsletter = () => {
  return (
    <section className="h-200 lg:h-81 flex flex-1 flex-col lg:flex-row">
      <div className="px-8 lg-px-0 h-full flex flex-1 flex-col items-center justify-center  bg-newsletter-orange bg-cover bg-center bg-no-repeat">
        <div>
          <h2 className="h2 capitalize mb-12">
            Subscribe & get pet
            <br />
            updatenews
          </h2>
          <form className="relative flex">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email address"
              className="absolute w-full py-1 pr-12 bg-transparent border-b-2 outline-none text-white placeholder:text-white/70"
            />
            <button type="submit">
              <HiOutlineArrowNarrowRight
                size={30}
                className="absolute right-0 top-0 text-white cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="h-full flex flex-1 justify-center items-end bg-newsletter-yellow bg-cover bg-center bg-no-repeat">
        <Image
          src="/assets/newsletter/dog.png"
          alt="Dog image"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};
