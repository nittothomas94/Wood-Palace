import '../All Products/AllProducts.css';
import './DiningTable.css';
import Navbar from '../../../Components/User/Navbar/navbar';
import Price from '../../../Components/price/price';
import Footer from '../../../Components/User/Footer/Footer';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';

const DiningTable = () => {
  const [DiningTable, setDiningTable] = useState([]);
  const [price, setPrice] = useState();

  useEffect(() => {
    getDiningTables();
  }, []);

  const getDiningTables = async () => {
    const response = await axios.get('/product?category=diningTable');
    setDiningTable(response.data);
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

    console.log(`/product?category=diningtable${queryString}`);
    setDiningTable(response.data);
  };

  return (
    <>
      <Navbar />
      <div className="dining-table">
        <div className="filter-box">
          <Price onPriceSelect={onPriceSelect} />
          <button className="filter_button" onClick={onFilterClick}>
            Filter
          </button>
        </div>

        <div className="body">
          <h1>Dining Table</h1>
          <div className="sub-body">
            {DiningTable.length > 0 ? (
              <div className="sub-body">
                {DiningTable.map((item, index) => {
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
      </div>
      <Footer />
    </>
  );
};

export default DiningTable;
