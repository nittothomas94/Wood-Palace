import './AllProducts.css';
import Navbar from '../../../Components/User/Navbar/navbar';
import Price from '../../../Components/price/price';
import Category from '../../../Components/category/category';
import Footer from '../../../Components/User/Footer/Footer';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';

const AllProducts = () => {
  const [products, setProduts] = useState([]);
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get('/product');
    setProduts(response.data);
  };
  console.log(products);

  const onPriceSelect = selectedPrice => {
    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
      setPrice({ minPrice, maxPrice });
    }
  }; // {minPrice: 5000, maxPrice: 6000}

  const onCategorySelect = selectedCategory => {
    setCategory(selectedCategory);
  };

  // console.log(category);

  const onFilterClick = async () => {
    const query = {};

    if (price) {
      query.minprice = price.minPrice;
      query.maxprice = price.maxPrice;
    }

    if (category) {
      query.category = category;
    }

    const queryString = new URLSearchParams(query).toString(); // Convert to URL Query String:

    console.log(queryString);

    const response = await axios.get(`/product?${queryString}`);
    setProduts(response.data);
  };

  return (
    <>
      <Navbar />
      <div className="all-products">
        <div className="filter-box">
          <Price onPriceSelect={onPriceSelect} />
          {/* Passing the function as a prop */}
          <Category onCategorySelect={onCategorySelect} />
          <button className="filter_button" onClick={onFilterClick}>
            Filter
          </button>
        </div>

        <div className="body">
          <h1>All Products</h1>
          {products.length > 0 ? (
            <div className="sub-body">
              {products.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img
                      src={
                        item.image ? item.image : '/images/main/no-image.jpg'
                      }
                      alt={
                        item.image ? 'image of product' : 'Image Not Avalable'
                      }
                    />
                    <div className="categoryANDprice">
                      <h2>{item.category}</h2>
                      <h2>₹{item.price}</h2>
                    </div>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results">
              <img
                src="/images/main/no-product-found.jpg"
                alt="No Products Found"
              />
              <p>No products found. Try adjusting your filters!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
