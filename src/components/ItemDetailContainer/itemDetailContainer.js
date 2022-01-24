import './itemDetailContainer.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/spinner';
import ItemDetail from '../ItemDetail/itemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Error from '../Error/error';


function ItemDetailContainer () {
    const {coinDetail} = useParams()
    const [item,setItem] = useState()
    const [loading,setLoading] = useState(true)
    const [itemQueryStatus,setitemQueryStatus] = useState(false)
    useEffect(
        ()=> {
            const dataBase = getFirestore()            
            const queryCoin=doc(dataBase,'coins', coinDetail)
            getDoc(queryCoin)
            .then(dataRes => !(dataRes._document === null) ? setItem({id: dataRes.id, ...dataRes.data()}) : setitemQueryStatus(true))
            .catch(err => console.log('This is the error:' + err))
            .finally(()=> setLoading(false))
        }, [coinDetail]
    )
    return (
        <section className="itemDetailContainer">
            {itemQueryStatus ? <Error/> : (loading ? <Spinner/> : <ItemDetail item={item} />)}
        </section>
    )
}

export default ItemDetailContainer;