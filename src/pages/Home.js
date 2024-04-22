import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
// import Footer from "../components/footer/Footer";
// import TopHeader from "../common/topHeader/TopHeader";
import CarousalSlide from "../components/slider/CarousalSlide";
import TitleMessage from "../components/titleMessage/TitleMessage";
import WhereiHaveWorked from "../components/whereIhaveWorked/WhereiHaveWorked";


const Home = () => {
    return (
        <>
            {/* <TopHeader /> */}
            <CarousalSlide />
            <TitleMessage />
            <Header />
            <Nav />
            <About />
            <Experience />
            <WhereiHaveWorked />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            {/* <Footer /> */}
        </>
    )
}

export default Home
