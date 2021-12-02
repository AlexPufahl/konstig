import Navbar from './components/Navbar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App () {
    return (
        <>
        <Navbar />
        <ItemListContainer greeting='Este mensaje llega desde App'/>
        </>
    )
}

export default App;