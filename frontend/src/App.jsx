import { Routes, Route } from 'react-router-dom';
import Home from './pages/User-Pages/Home/home';
import AllProducts from './pages/User-Pages/All Products/AllProducts';
import Chair from './pages/User-Pages/Chair/Chair';
import Cabinet from './pages/User-Pages/Cabinet/Cabinet';
import DiningTable from './pages/User-Pages/DiningTable/DiningTable';
import Account from './pages/User-Pages/Home/home';
import Cart from './pages/User-Pages/Cart/Cart';
import Signin from './pages/User-Pages/Signin/Signin';
import Signup from './pages/User-Pages/Signup/Signup';
import Liked from './pages/User-Pages/liked/Liked';
import Dashboard from './pages/Admin-Pages/Dashboad/Dashboard';
import Orders from './pages/Admin-Pages/Orders/Orders';
import AddProduct from './pages/Admin-Pages/AddProduct/AddProduct';
import Users from './pages/Admin-Pages/Users/Users';
import Category from './Components/category/category';
import AllProductsAdminPage from './pages/Admin-Pages/Products/Products';
import UpdateProduct from './pages/Admin-Pages/UpdateProduct/UpdateProduct';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        {/* USER ROUTES*/}
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/diningtable" element={<DiningTable />} />
        <Route path="/account" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/liked" element={<Liked />} />
        {/* ADMIN ROUTES */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/all-products" element={<AllProductsAdminPage />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/categories" element={<Category />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/update-product" element={<UpdateProduct />} />
      </Routes>
    </>
  );
};

export default App;
