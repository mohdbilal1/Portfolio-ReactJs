import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create dynamic web pages, develop user interfaces, and implement responsive design principles.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate RESTful APIs and third-party services to enhance application functionality.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement responsive designs for mobile and desktop users.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop and implement new features and functionalities based on client requirements.</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create responsive designs that ensure a consistent experience across different devices and platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Work with various clients to design user-centered interfaces and experiences.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilize user feedback and analytics to iterate and improve designs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide design solutions that meet client needs and business objectives.</p>
            </li>

          </ul>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>


          </ul>
        </article> */}
      </div>
    </section>
  );
}

export default Services;
