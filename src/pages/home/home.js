import './home.css'
import FirstIllustration from '../../assets/Home/FirstIllustration.svg'
import SecondIllustration from '../../assets/Home/SecondIllustration.svg'

function Home () {
    return(
        <section className="home">
            <div className="home__firstSection">
                <div className="firstSection__textContainer">
                    <h2 className="firstSection__text">Buy <span className='firstSection__coloredText'>cryptos</span><br />in minutes.</h2>
                </div>
                <img className='firstSection__firstIllustration' src={FirstIllustration} alt="Abstract illustration" />
            </div>
            <div className="home__secondSection">
                <img className='secondSection__secondIllustration' src={SecondIllustration} alt="Abstract illustration" />
                <div className="secondSection__textContainer">
                    <h2 className="secondSection__title">If you buy $100 of crypto...<br/>you should get $100 of crypto.</h2>
                    <h3 className="secondSection__subtitle">Konstig buying fee:</h3>
                    <h3 className='secondSection__fee'>$0.0</h3>
                </div>
            </div>

        </section>
    )
}

export default Home;