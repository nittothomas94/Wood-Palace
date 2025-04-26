import '../All Products/AllProducts.css';
import './Chair.css';
import Navbar from '../../../Components/User/Navbar/navbar';
import Price from '../../../Components/price/price';
import Footer from '../../../Components/User/Footer/Footer';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';
const Chair = () => {
  const [chairs, setChairs] = useState([]);
  const [price, setPrice] = useState();

  useEffect(() => {
    getChairs();
  }, []);

  const getChairs = async () => {
    const response = await axios.get('/product?category=Chair');
    setChairs(response.data);
  };

  const onPriceSelect = selectedPrice => {
    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
      setPrice({ minPrice, maxPrice });
    }
  };

  const onFilterClick = async () => {
    const query = {};

    if (price) {
      query.minprice = price.minPrice;
      query.maxprice = price.maxPrice;
    }

    const queryString = new URLSearchParams(query).toString(); // Convert to URL Query String:

    const response = await axios.get(`/product?category=Chair&${queryString}`);

    console.log(`/product?category=Chair${queryString}`);
    setChairs(response.data);
  };

  return (
    <>
      <Navbar />
      <div className="chair">
        <div className="filter-box">
          <Price onPriceSelect={onPriceSelect} />
          <button className="filter_button" onClick={onFilterClick}>
            Filter
          </button>
        </div>

        <div className="body">
          <h1>Chair</h1>
          {chairs.length > 0 ? (
            <div className="sub-body">
              {chairs.map((item, index) => {
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
                    <h2>
                      {item.category} {item.price}
                    </h2>
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

export default Chair;
