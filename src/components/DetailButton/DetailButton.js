import { Link } from 'react-router-dom';
import './DetailButton.css'

const DetailButton = ({coinName,itemId}) => {
    return (
        <Link to={`/detail/${itemId}`} className="detailButton">
            <p className="detailButton_text">See more of <span className='detailButton__span'>{coinName}</span></p>
        </Link>
    )
}

export default DetailButton;