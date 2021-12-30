import './itemDetailContainer.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/spinner';
import ItemDetail from '../ItemDetail/itemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


function ItemDetailContainer () {
    const {coinDetail} = useParams()
    const [item,setItem] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(
        ()=> {
            const dataBase = getFirestore()            
            const queryCoin=doc(dataBase,'coins', coinDetail)
            getDoc(queryCoin)
            .then(dataRes => setItem({id: dataRes.id, ...dataRes.data()}))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }, [coinDetail]
    )
    return (
        <section className="itemDetailContainer">
            {loading ? <Spinner/> : <ItemDetail item={item} />}
        </section>
    )
}

export default ItemDetailContainer;