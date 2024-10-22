import {Link, useMatch, useResolvedPath} from 'react-router-dom'
// <li><a href="https://github.com/johnsoncodehub" 
//target="_blank" rel="noopener noreferrer">Github</a></li>
import logo from './components/Assets/logo.png'
import './style.css'
import cart_icon from './components/Assets/cart_icon.png'
import { useContext } from 'react'
import { ShopContext } from './Context/ShopContext'

const Nav = () => {

  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='nav-container'>
      <div className='nav-logo'>
          <img src={logo} alt='' />
          <p>Shopper</p>
        </div>
      <Nav className='container'>
        <ul >                        
            <li><CustomLink to="/">Shop </CustomLink></li>    
            <li><CustomLink to="/mens">Men </CustomLink></li>
            <li><CustomLink to="/womens">Women </CustomLink></li>
            <li><CustomLink to="/kids">Kids </CustomLink></li>
            
        </ul>
      </Nav>
      <div className='nav-login-cart'>
          <Link to='/login'> <button>login</button></Link>
          <Link to='/cart'> <img src={cart_icon} alt='' /></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

function CustomLink( { to, children,...props})
{
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path : resolvedPath.pathname, end : true});
  return(
    <li className= { isActive ? "active":"" }>
      <Link to={to} {...props} >{children}</Link>
    </li>
  );
}

export default Nav