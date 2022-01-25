import { useEffect, useState } from 'react';
import './itemListContainer.css';
import Spinner from '../Spinner/spinner';
import ItemList from '../ItemList/itemList';
import { useParams } from 'react-router-dom';
import CategorySelector from '../CategorySelector/categorySelector';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



function ItemListContainer () {
    const {coinCategories} = useParams()    
    const [coin,setCoin] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(
        ()=> {
            const dataBase = getFirestore()
            if (coinCategories) {
                const q = query(collection(dataBase,'coins'),where('category','==', coinCategories))
                getDocs(q)
                .then(dataRes => setCoin(dataRes.docs.map((coin) => ({id:coin.id, ...coin.data()}))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false));
            } else {
                const itemListCollection = collection(dataBase,'coins');
                getDocs(itemListCollection)
                .then(dataRes => setCoin(dataRes.docs.map((coin) => ({id:coin.id, ...coin.data()}))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false));
            }
        },[coinCategories]);
    return (
        <section className="itemListContainer">
            <CategorySelector/>
            {loading ? <Spinner/> : <ItemList coin={coin} />}
        </section>
    )
}

export default ItemListContainer;