import '../All Products/AllProducts.css';
import Navbar from '../../../Components/User/Navbar/navbar';
import Price from '../../../Components/price/price';
import { useParams } from 'react-router-dom';
const Cabinet = () => {
  const last = useParams();

  console.log(last);
  return (
    <>
      <Navbar />
      <div className="cabinet">
        <div className="filter-box">
          <Price />
          <button className="filter_button">Filter</button>
        </div>

        <div className="body">
          <h1>Cabinets</h1>
          <div className="sub-body">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
              return (
                <div className="card" key={index}>
                  <img
                    src="/images/main/no-image.jpg"
                    alt="Image Not Avalable"
                  />
                  <h2>{item}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis modi voluptates incidunt soluta amet! Dolorum ut
                    laborum earum, alias obcaecati error, distinctio sapiente
                    ipsa, veritatis voluptatum eaque consequatur aut.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cabinet;
