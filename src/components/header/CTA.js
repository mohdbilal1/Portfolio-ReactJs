import CV from "../../assets/Bilal-Resume-new.pdf";
import { MdWhatsapp } from "react-icons/md";

const CTA = () => {

    return (
      <div className="cta">
        <a className="btn" href={CV} download>
          Download CV 
        </a>
        <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=919760786071">
          Let's Talk 
        </a>
      </div>
    );
  }

export default CTA;
