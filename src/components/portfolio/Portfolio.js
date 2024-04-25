import "./portfolio.css";
import IMG1 from "../../assets/alibada.png";
import IMG2 from "../../assets/portfolioImage.png";
import IMG3 from "../../assets/indmart.png";
import IMG4 from "../../assets/eximge.png";
import IMG5 from "../../assets/foodreastaurent.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Abaris Global Products - Abaris B2B Wholesale (Alibab-dummy)",
        github: "https://github.com/mohdbilal1/Ali-baba",
        demo: "https://alibab-dummy-123.netlify.app/"
    },
    {
        id: 2,
        image: IMG2,
        title: "Portfolio Web Application Built Using ExpressJs, EJS, and MongoDB",
        github: "https://github.com/mohdbilal1/MyPortfolio-ExpressJs",
        demo: "https://myportfolio.cyclic.app/"
    },
    {
        id: 3,
        image: IMG3,
        title: "A IndiaMart-Dummy Web Application Built Using ReactJs and Material UI.",
        github: "https://github.com/mohdbilal1/Indiamart-Dummy",
        demo: "https://stellar-indiamart-dummy.netlify.app/"
    },
    {
        id: 4,
        image: IMG4,
        title: "EXIM Businesses Around the World Dummy Web Application Built Using ReactJs and Material UI",
        github: "https://github.com/mohdbilal1//ex-im",
        demo: "https://exim-business.netlify.app/"
    },
    {
        id: 5,
        image: IMG5,
        title: "Food Oder Resturant Web Application Built Using ReactJs and Material UI",
        github: "https://github.com/mohdbilal1/foodResturant-Website-ReactJS-MUI",
        demo: "https://foodyfoody.netlify.app/"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item" data-aos="flip-right" data-aos-duration="2000">
                            <div className="portfolio__item-image">
                                <img src={image} alt="" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="">
                                    Github
                                </a>
                                <a href={demo} className="btn btn-primary" target="">
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;
