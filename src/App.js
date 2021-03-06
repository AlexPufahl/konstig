import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navBar';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Home from './pages/home/home';
import AboutUs from './pages/aboutUs/aboutUs';
import Shop from './pages/shop/shop';
import Footer from './components/Footer/footer';
import Cart from './pages/cart/cart';
import CartContextProvider from './context/cartContext';
import CheckOut from './components/CheckOut/checkOut';

function App () {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route exact path='/shop' element={<Shop/>}></Route>
                    <Route exact path='/category/:coinCategories' element={<Shop/>}></Route>                
                    <Route exact path='/detail/:coinDetail' element={<ItemDetailContainer/>}></Route>                
                    <Route exact path='/aboutUs' element={<AboutUs/>}></Route>
                    <Route exact path='/cart' element={<Cart/>}></Route>
                    <Route exact path='/checkOut' element={<CheckOut/>}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;