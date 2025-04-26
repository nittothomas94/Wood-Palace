import './Cart.css';
import Navbar from '../../../Components/User/Navbar/navbar';
import Footer from '../../../Components/User/Footer/Footer';
import Button from '../../../Components/Button/Button';

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart">
        <h1 className="cart_h1">Cart Page</h1>
        <div className="headings">
          <p>Image</p>
          <p>Product</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Tortal</p>
          <p>Remove</p>
        </div>
        <div className="body">
          {[1, 2, 3, 4, 5, 6].map(item => {
            return (
              <div className="cart_card">
                <img src="images/main/modern-chair4.jpeg" alt="img" />
                <p>p name</p>
                <p>price</p>
                <p>quan</p>
                <p>toltal</p>
                <p className="remove">Remove</p>
              </div>
            );
          })}
        </div>

        <div className="last-box">
          <Button text="Contineue Shoping" className="contineue-shoping" />
          <div className="cart-total">
            <h2>
              <u>CART TOTAL</u>
            </h2>
            <p>TOTAL : 3000</p>
            <Button text="Proceed to Checkout" className="contineue-shoping" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
