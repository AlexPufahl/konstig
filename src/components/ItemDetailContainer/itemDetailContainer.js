import './itemDetailContainer.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getItem} from '../../data/coins.js';
import Spinner from '../Spinner/spinner';
import ItemDetail from '../ItemDetail/itemDetail';


function ItemDetailContainer () {
    const {coinDetail} = useParams()
    const [item,setItem] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(
        ()=> {
            getItem
            .then(dataRes => setItem(dataRes.filter(coin => coin.id === parseInt(coinDetail))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }, [coinDetail]
    )
    return (
        <section className="itemDetailContainer">
            {loading ? <Spinner/> : <ItemDetail item={item[0]} />}
        </section>
    )
}

export default ItemDetailContainer;