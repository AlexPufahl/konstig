import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import './itemDetailContainer.css';
import {getItem} from '../../data/coins.js';
import Spinner from '../Spinner/spinner';
import ItemDetail from '../ItemDetail/itemDetail';


function ItemDetailContainer () {
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=> {
            getItem
            .then(dataRes => setItem(dataRes))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }, []
    )
    
    return (
        <section className="itemDetailContainer">
            {loading ? <Spinner/> : <ItemDetail item={item} />}
        </section>
    )
}

export default ItemDetailContainer;