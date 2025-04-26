import './Products.css';
import Navbar from '../../../Components/Admin/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Button from '../../../Components/Button/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get('/product');
    setProducts(response.data);
  };

  console.log(products);

  const onUpdateProudctClick = () => {
    console.log('update button clicked');
    navigate('/admin/update-product');
  };
  return (
    <>
      <Navbar />
      <div className="all-products-main-admin">
        <h1>Products</h1>
        <div className="all-products-admin">
          {products.map(item => {
            return (
              <div className="all-products-card">
                <img src={item.image} alt="product image" />
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <div className="all_products_card_buttons">
                  <Button
                    text="Update"
                    className="update_btn"
                    onClick={() => {
                      onUpdateProudctClick(item._id);
                    }}
                  />
                  <Button text="Delete" className="delete_btn" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
