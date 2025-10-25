import { ServiceSlider } from "@/components/service-slider";

export const Services = () => {
  return (
    <section
      className="bg-services bg-cover bg-no-repeat bg-center min-h-216 py-8"
      id="services"
    >
      <div className="container h-216">
        <h2 className="h2 mb-12">Our Services</h2>
        <div>
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
};
