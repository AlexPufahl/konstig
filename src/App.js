import Navbar from './components/Navbar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/itemCount';

function App () {
    const itemStock = 10;
    const initialValue =  1;
    return (
        <>
            <Navbar />
            <ItemListContainer greeting='Este mensaje llega desde App'/>
            <ItemCount stock={itemStock} initial={initialValue} />
        </>
    )
}

export default App;