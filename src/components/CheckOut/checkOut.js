import './checkOut.css'
import { useState } from 'react';
import {useCartContext} from '../../context/cartContext.js'
import CheckOutCart from '../CheckOutCart/checkOutCart';
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import UpdateStock from '../UpdateStock/updateStock';

function CheckOut () {
    const {cartList,deleteItem,getTotalCost,clear} = useCartContext();

    let totalCost = getTotalCost(cartList)

    const [orderId, setOrderId] = useState('')
    const [formData, setFormData] = useState(
        {name: '', phone: '', email: ''}
    )

    const handleFormDataChange = (e) => {setFormData({...formData,[e.target.name]: e.target.value})}


    const newOrder = (e) => {
        e.preventDefault()
        let order = {};

        order.buyer = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email
        }

        order.items = cartList.map((cartItem) => {
            const id = cartItem.id;
            const coinName = cartItem.coinName;
            const price = cartItem.price
            const quantity = cartItem.quantity

            return {id,coinName, price, quantity}
        })

        order.date = Timestamp.fromDate(new Date())
        order.total = totalCost;
        
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection,order)
        .then(dataRes => setOrderId(dataRes.id))
        .catch(err => console.log(err))
        .finally(() => {clear(); setFormData({name:"", email:"", phone:""})});

        UpdateStock(order,db,cartList)
    }
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
                <form  className="formContainer__form" onSubmit={newOrder} onChange={handleFormDataChange} autocomplete="off">
                    <div className="form__name">
                        <label htmlFor="name" className='name__label'>Full name</label>
                        <input type="text" className="name__input" name='name' value={formData.name}/>
                    </div>
                    <div className="form__email">
                        <label htmlFor="email" className='email__label'>Email</label>
                        <input type="email" className="email__input" name='email'value={formData.email}/>
                    </div>
                    <div className="form__phone">
                        <label htmlFor="phone" className='phone__label'>Phone</label>
                        <input type="tel" className="phone__input" name='phone' value={formData.phone}/>
                    </div>
                    <button className="formContainer__btn">Finish purchase</button>
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