import './buyButton.css'

const BuyButton = ({coinName}) => {
    return (
        <button className="buyButton">
            <p className="buyButton_text">Buy <span className='buyButton__span'>{coinName}</span></p>
        </button>
    )
}

export default BuyButton;