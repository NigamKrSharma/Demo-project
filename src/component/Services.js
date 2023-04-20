import { services } from "../data";
// import Title from './Title'
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>SERVICES WE DELIVER</h2>
        <p>Preparing for your success, we provide truly prominent IT solutions.
</p>
      </div>

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
