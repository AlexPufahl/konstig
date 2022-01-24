import './checkOut.css'
import {useCartContext} from '../../context/cartContext.js'
import CheckOutCart from '../CheckOutCart/checkOutCart';
import useForms from '../../customHooks/useForm';

function CheckOut () {
    const {cartList,deleteItem,getTotalCost} = useCartContext();
    let totalCost = getTotalCost(cartList)

    const {errors,
        formData,
        handleFormDataChange,
        orderId,
        submitForm} = useForms()
    return(
        <>
        {(orderId.length !== 0)
        ?
        <section className='checkOutOrderDispaly'>
            <h1 className="checkOutOrderDisplay__title">Thank you for your order!</h1>
            <h2 className="checkOutOrderDisplay__refNum">Reference number: <span className='refNum__colored'>{orderId}</span></h2>
        </section>
        :
        <section className="checkOut">
            <div className="checkOut__formContainer">
                <h1 className="formContainer__title">Let's finish with your contact data</h1>
                <form  className="formContainer__form" onSubmit={submitForm} onChange={handleFormDataChange} autocomplete="off">
                    <div className="form__name">
                        <label htmlFor="name" className='name__label'>Full name</label>
                        <input type="text" className="name__input" name='name' value={formData.name} required/>
                        <h3 className="input__error">{errors.name}</h3>
                    </div>
                    <div className="form__email">
                        <label htmlFor="email" className='email__label'>Email</label>
                        <input type="email" className="email__input" name='email'value={formData.email} required/>
                        <h3 className="input__error">{errors.email}</h3>
                    </div>
                    <div className="form__email">
                        <label htmlFor="emailConfirmation" className='email__label'>Email confirmation</label>
                        <input type="email" className="email__input" name='emailConfirmation'value={formData.emailConfirmation} required/>
                        <h3 className="input__error">{errors.emailConfirmation}</h3>
                    </div>
                    <div className="form__phone">
                        <label htmlFor="phone" className='phone__label'>Phone</label>
                        <input type="tel" className="phone__input" name='phone' value={formData.phone} required/>
                        {errors.phone && <h3 className="input__error">{errors.phone}</h3>}
                    </div>
                    <button className={(Object.keys(errors).length == 0) ? "formContainer__btn" : "d-none"}>→</button>
                </form>
            </div>
            <div className="checkOut__cart">
                <h2 className="cart__title">Cart</h2>
                {cartList.map(item => <CheckOutCart key={item.id} id={item.id} coinName={item.coinName} quantity={item.quantity} pictureUrl={item.pictureUrl} deleteItem={()=>deleteItem(item)} price={item.price} />)}
                <h3 className="cart__total">Total: ${totalCost}</h3>
            </div>
        </section> }
        </>
        
    )
}

export default CheckOut;