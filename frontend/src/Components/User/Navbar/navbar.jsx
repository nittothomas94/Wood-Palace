import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation(); // To detect current URL path
  const [activeNavItem, setActiveNavItem] = useState(
    localStorage.getItem('activeNavItem') || 'home'
  );

  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home';
    setActiveNavItem(currentPath);
    localStorage.setItem('activeNavItem', currentPath);
  }, [location]);

  // console.log(activeNavItem);

  // 1. useLocation() - Gets the current URL path.
  // 2. localStorage - Stores the activeNavItem state, ensuring it persists across page reloads.
  // 3. useEffect() - Watches for URL changes and updates the activeNavItem.

  return (
    <div className="navbar-user">
      <h1>Wood Palace</h1>
      <div className="left-usernavbar">
        <div className="menu-items">
          <Link
            to="/"
            className={`links ${activeNavItem === 'home' ? 'active' : ''}`}
          >
            HOME
          </Link>

          <Link
            to="/allproducts"
            className={`links ${
              activeNavItem === 'allproducts' ? 'active' : ''
            }`}
          >
            All PRODUCTS
          </Link>

          <Link
            to="/chair"
            className={`links ${activeNavItem === 'chair' ? 'active' : ''}`}
          >
            CHAIR
          </Link>

          <Link
            to="/diningtable"
            className={`links ${
              activeNavItem === 'diningtable' ? 'active' : ''
            }`}
          >
            DINING TABLE
          </Link>
        </div>
        <div className="cart-account">
          <Link
            to="/account"
            className={`links ${activeNavItem === 'account' ? 'active' : ''}`}
          >
            <i className="material-icons">person</i>
          </Link>

          <Link
            to="/cart"
            className={`links ${activeNavItem === 'cart' ? 'active' : ''}`}
          >
            <i className="material-icons">shopping_cart</i>
          </Link>

          <Link
            to="/signup"
            className={`links ${activeNavItem === 'signup' ? 'active' : ''}`}
          >
            Signup
          </Link>
        </div>
        <div className="linked">
          <Link
            to="/liked"
            className={`links ${activeNavItem === 'liked' ? 'active' : ''}`}
          >
            <i className="material-icons">favorite</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
