import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import './itemListContainer.css';
import {getFetch} from '../../data/coins.js';
import Spinner from '../Spinner/spinner';
import ItemList from '../ItemList/itemList';

function ItemListContainer () {
    const [coin,setCoin] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=> {
            getFetch
            .then(dataRes => setCoin(dataRes))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }, []
    )
    
    return (
        <section className="itemListContainer">
            {loading ? <Spinner/> : <ItemList coin={coin} />}
        </section>
    )
}

export default ItemListContainer;