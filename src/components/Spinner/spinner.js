import { SpinnerDotted } from 'spinners-react';
import './spinner.css';

function Spinner () {
    return (
        <div className="spinner__container">
            <SpinnerDotted size={80} thickness={100} speed={100} color="rgba(254, 207, 141, 1)" />
        </div>
    )
    
}

export default Spinner;