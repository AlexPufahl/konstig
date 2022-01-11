import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList,setCartList] = useState([])

    function addItem(item) {
      const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) {
          const oldQuantity = cartList[index].quantity  
          cartList.splice(index, 1)
          setCartList([...cartList, { ...item, quantity: item.quantity + oldQuantity}])
        }else {
          setCartList([...cartList, item])
        }
    }

    function clear() {
      setCartList([])
    }

    function getTotalCost (cartList) {
        return cartList.reduce((totalCost, { price: itemCost, quantity: itemQuantity  }) => totalCost + parseFloat(itemCost * itemQuantity), 0);
    };

    function deleteItem(item) {
      setCartList(cartList.filter(coin => coin !== item))
    }

    let getCartNumber = cartList.length
    
    return (
        <CartContext.Provider value={{cartList, addItem, clear, getTotalCost,deleteItem, getCartNumber}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;