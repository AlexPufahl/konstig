import './aboutUs.css'
import Illustration from '../../assets/AboutUs/Illustration.svg'

function AboutUs (){
    return (
        <section className='aboutUs'>
            <h1 className="aboutUs__title">We're <span className="aboutUs__titleColored">Konstig</span></h1>
            <article className="aboutUs__body">
                <img src={Illustration} alt="" className="body__img" />
                <p className="body__text">We are building the cryptoeconomy - a more fair, accessible, efficient, and transparent financial system enabled by crypto. <br />
                We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive crypto coins. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.</p>
            </article>
        </section>
    )
}

export default AboutUs;