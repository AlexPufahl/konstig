import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemTable from '../ItemsTable/itemsTable';
import './itemsTableContainer.css'
import Spinner from '../Spinner/spinner.js'

function ItemsTableContainer (){
    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(
        ()=> {
            const dataBase = getFirestore();
            const coinsCollection = collection(dataBase, `coins`);
            getDocs(coinsCollection)
            .then(dataResponse => setCoins(dataResponse.docs.map((coin) => ({id:coin.id, ...coin.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        },[]
    )
    return (
        <section className="itemsTableContainer">
            <h1 className="itemsTableContainer__title">Market trend</h1>
            {loading ? <Spinner /> : coins.map(coin => <ItemTable key={coin.id} coinImg={coin.pictureUrl} coinName={coin.coinName} coinPrice={coin.price}/>)}
        </section>
    )
}

export default ItemsTableContainer;