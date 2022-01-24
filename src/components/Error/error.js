import './error.css'
import ErrorIlustration from '../../assets/Error/ErrorIlustration.svg'
import { Link } from 'react-router-dom';

function Error (){
    return (
        <section className="error">
            <img src={ErrorIlustration} alt="" className="error__img" />
            <h1 className="error__text">Look's like something went wrong</h1>
            <Link className='error__redirect' to={'/'}>Go home..</Link>
        </section>
    )
}

export default Error;