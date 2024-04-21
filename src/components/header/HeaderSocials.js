import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";

const HeaderSocials=()=> {

    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/mohd-bilal1/" target="">
          <BsLinkedin />
        </a>
        <a href="https://github.com/mohdbilal1" target="">
          <FaGithub />
        </a>
        {/* <a href="https://dribble.com" target="">
          <FiDribbble />
        </a> */}
      </div>
    );
  }

export default HeaderSocials;
