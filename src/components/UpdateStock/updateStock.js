import { doc, writeBatch } from "firebase/firestore";

function UpdateStock(order,db,cartList) {    
    const batch = writeBatch(db);
    
    order.items.map(e => {
        let docUpdate = doc(db,'coins', e.id)
        let currentStock = cartList.find(coin => coin.id === e.id).stock

        batch.update( docUpdate, {stock: currentStock - e.quantity})    
        return(e)
    })

    batch.commit()
}

export default UpdateStock;