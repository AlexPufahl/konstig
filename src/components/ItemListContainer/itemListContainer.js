import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import './itemListContainer.css';
import {getFetch} from '../../data/coins.js';
import Spinner from '../Spinner/spinner';
import ItemList from '../ItemList/itemList';
import { useParams } from 'react-router-dom';
import CategorySelector from '../CategorySelector/categorySelector';


function ItemListContainer () {
    const {coinCategories} = useParams()    
    const [coin,setCoin] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(
        ()=> {
            if (coinCategories) {
                getFetch
            .then(dataRes => setCoin(dataRes.filter(coin => coin.category === coinCategories)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
            } else {
                getFetch
                .then(dataRes => setCoin(dataRes))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false));           
            }
        }, [coinCategories]
    )
    return (
        <section className="itemListContainer">
            <CategorySelector/>
            {loading ? <Spinner/> : <ItemList coin={coin} />}
        </section>
    )
}

export default ItemListContainer;