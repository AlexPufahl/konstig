import { useState } from "react";
import deleteProperty from "../helpers/deleteProperty";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import UpdateStock from '../components/UpdateStock/updateStock.js';
import {useCartContext} from '../context/cartContext.js'

function useForms () {
    const {cartList,getTotalCost,clear} = useCartContext();
    let totalCost = getTotalCost(cartList)

    const [orderId, setOrderId] = useState('')

    const [errors, setErrors] = useState({})

    const formValidate = (e, name, value) => {
        switch (name) {
            case 'name':
                if (value.length <= 4) {
                    setErrors({...errors,name:'Please enter a correct name. (at least 5 letters)'})
                }else{
                    let newObj = deleteProperty(errors, 'name')
                    setErrors(newObj)
                }
                break;
            case 'phone':
                if (value.length !== 10){
                    setErrors({...errors,phone:'Please enter a valid phone number'})
                }else{
                    let newObj = deleteProperty(errors, 'phone')
                    setErrors(newObj)
                }
                break;
            case 'email':
                if(!new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value))
                {
                    setErrors({...errors,email:'Please enter a valid email'})
                }else{
                    let newObj = deleteProperty(errors, 'email')
                    setErrors(newObj)
                }
                break;
            case 'emailConfirmation':
                if(value !== formData.email){
                    setErrors({...errors, emailConfirmation:"Emails doesn't match"})
                }else{
                    let newObj = deleteProperty(errors, 'emailConfirmation')
                    setErrors(newObj)
                }
                break;            
                
            default:
                break;
        }
    }

    const [formData, setFormData] = useState(
        {name: '', phone: '', email: '', emailConfirmation: ""}
    )

    const handleFormDataChange = (e) => {
        formValidate(e,e.target.name,e.target.value)
        setFormData({...formData,[e.target.name]: e.target.value})
    }

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

        const submitForm = (e) => {
            e.preventDefault();

            if (Object.keys(errors).length === 0) {
                newOrder(e)
            }else {
                console.log('error');
            }
        }
    return {
        errors,
        formData,
        handleFormDataChange,
        newOrder,
        orderId,
        submitForm
    }
}

export default useForms;