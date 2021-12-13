import Navbar from './components/Navbar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

function App () {
    return (
        <>
            <Navbar />
            <ItemListContainer/>
            <hr />
            <ItemDetailContainer/>
        </>
    )
}

export default App;