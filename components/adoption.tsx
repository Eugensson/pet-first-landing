import Image from "next/image";

export const Adoption = () => {
  return (
    <section className="py-8 min-h-190 flex bg-adoption bg-cover bg-center bg-no-repeat">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-16">
        <div className="flex-1 mb-6 lg:mb-0">
          <Image
            src="/assets/adoption/img1.png"
            alt="Woman with dog"
            width={542}
            height={560}
          />
        </div>
        <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left text-cream">
          <h2 className="h2 mb-8">Making pet parenting easy for everyone</h2>
          <p className="mb-8 text-xl">
            Discover a simple and caring way to welcome a furry friend into your
            home. Our adoption process is designed to connect loving pets with
            responsible owners, offering guidance, support, and a smooth
            experience every step of the way.
          </p>
          <ul className="mb-8 flex flex-col gap-y-4 lg:list-disc lg:pl-4 text-xl capitalize">
            <li>Adoption</li>
            <li>Trusted partners</li>
            <li>Next day support</li>
          </ul>
          <button type="button" className="btn btn-primary mx-auto lg:mx-0">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};
