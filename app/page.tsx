import { Hero } from "@/components/hero";
import { Pets } from "@/components/pets";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { Adoption } from "@/components/adoption";
import { Newsletter } from "@/components/newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
