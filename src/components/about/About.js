
import ME from "../../assets/b444.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
import { IoMdArrowDropright } from "react-icons/io";

const About = () => {

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>00+ WorldWide</small>
            </article>
            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hello! My name is Mohd Bilal, and I am a passionate software engineer and problem solver, dedicated to creating impactful codes that thrive on the internet.
            I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products. currently learning NextJs.
          </p>

          <p className="fewtechnologies">Here are a few technologies I've been working with recently :</p>
          <ul className="techno">
            <li><IoMdArrowDropright /> ReactJs</li>
            <li><IoMdArrowDropright /> JavaScript</li>
            <li><IoMdArrowDropright /> Node.js</li>
            <li><IoMdArrowDropright /> HTML/CSS</li>
            <li><IoMdArrowDropright /> Bootstrap</li>
            <li><IoMdArrowDropright /> Tailwind CSS</li>
            <li><IoMdArrowDropright /> ExpressJs</li>
            <li><IoMdArrowDropright /> MongoDB</li>
            <li><IoMdArrowDropright /> Material UI</li>
            <li><IoMdArrowDropright /> Next.js</li>
          </ul>

        </div>
      </div>
    </section>
  );
}


export default About;
