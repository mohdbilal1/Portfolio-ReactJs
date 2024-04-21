import CTA from "./CTA";
import ME from "../../assets/myp.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
    return (
        <header>
            <div className="container header__container" data-aos="zoom-in" data-aos-duration="2000">
                <h5>Hello I'm</h5>
                <h1>MOHD BILAL</h1>
                <div className="text-light">ReactJS Developer | Fullstack Developer</div>
                <CTA />
                <div className="me">
                    <img src={ME} alt="ME" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
                <HeaderSocials />
            </div>
        </header>
    );
}

export default Header;
