import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState(
    localStorage.getItem('activeNavItem') || 'admin/dashboard'
  );

  useEffect(() => {
    const currentPath = location.pathname;

    setActiveNavItem(currentPath);
    localStorage.setItem('activeNavItem', currentPath);
  }, [location]);

  return (
    <div className="navbar-admin">
      <div className="menu-items">
        <Link
          to="/admin/dashboard"
          className={`links ${
            activeNavItem === '/admin/dashboard' ? 'active' : ''
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/admin/orders"
          className={`links ${
            activeNavItem === '/admin/orders' ? 'active' : ''
          }`}
        >
          Orders
        </Link>

        <Link
          to="/admin/all-products"
          className={`links ${
            activeNavItem === '/admin/all-products' ? 'active' : ''
          }`}
        >
          All Products
        </Link>

        <Link
          to="/admin/users"
          className={`links ${
            activeNavItem === '/admin/users' ? 'active' : ''
          }`}
        >
          Users
        </Link>

        <Link
          to="/admin/add-product"
          className={`links ${
            activeNavItem === '/admin/add-product' ? 'active' : ''
          }`}
        >
          Add Product
        </Link>

        <div className="admin-account">
          <Link
            to="/account"
            className={`links ${
              activeNavItem === '/admin/admin-account' ? 'active' : ''
            }`}
          >
            <i className="material-icons">person</i>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
