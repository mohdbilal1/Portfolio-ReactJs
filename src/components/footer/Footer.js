
import { IoLogoTwitter,IoLogoYoutube} from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

import logoImg from '../../assets/mb.jpg'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="footer__logo">
                <Link to="/"> <img src={logoImg} alt="img" /></Link>
            </div>
            <ul className="permalinks">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
                <Link to="https://www.linkedin.com/in/mohd-bilal1" target="_blank">
                    <BsLinkedin />
                </Link>
                <Link to="https://github.com/mohdbilal1" target="_blank">
                    <FaGithub />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                    <IoLogoTwitter />
                </Link>
                <Link to="https://www.youtube.com/" target="_blank">
                    <IoLogoYoutube />
                </Link>
            </div>
            <div className="footer__copyright">
                <small>&copy; mB.Dev. All rights reserved, Made by <b><Link to={'https://github.com/mohdbilal1'}>Mohd Bilal</Link></b></small>
            </div>
        </footer>
    );
}

export default Footer;
