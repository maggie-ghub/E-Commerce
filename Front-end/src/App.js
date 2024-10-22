import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import ShopCategory from './pages/ShopCatagory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import CartItems from './components/CartItems/CartItems';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'


const App = () => {
   
    return (
        <div>
            <Nav />
            <Routes>
                <Route>   
                    <Route exact path="/" element={<Shop />} />
                    <Route exact path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
                    <Route exact path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
                    <Route exact path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route path="/product/:productId" element={<Product />} />    
                    <Route exact path="/cart" element={<CartItems />} />
                    <Route exact path="/login" element={<LoginSignup />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
    }
export default App;