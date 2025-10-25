import { Hero } from "@/components/hero";
import { Pets } from "@/components/pets";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { Adoption } from "@/components/adoption";
import { Newsletter } from "@/components/newsletter";
import { BackToTopBtn } from "@/components/back-to-top-btn";

const Home = () => {
  return (
    <div>
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default Home;
