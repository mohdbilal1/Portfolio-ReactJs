import CV from "../../assets/resume-nov24.pdf";

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
