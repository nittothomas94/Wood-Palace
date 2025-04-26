import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-user">
      <div className="footer_para">
        <h1>Wood Palace</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores
          tempore corrupti sint cum odit aperiam natus, voluptates quisquam
          accusantium architecto ullam quaerat dolor distinctio error quidem
          placeat dolore expedita!
        </p>
        <div className="social_icons">
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
          <i className="fa-brands fa-square-whatsapp"></i>
        </div>
      </div>

      <div className="menu-items-container">
        <div className="menu_items">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blogs</a>
        </div>
        <div className="menu_items">
          <a href="">payment</a>
          <a href="">Shipping</a>
          <a href="">Cancelation & Return</a>
          <a href="">FAQ</a>
        </div>
        <div className="menu_items">
          <a href="">All Products</a>
          <a href="">Chairs</a>
          <a href="">Dining Tables</a>
          <a href="">Account</a>
        </div>
        <div className="menu_items">
          <a href="">Careers</a>
          <a href="">Furniture Shops</a>
          <a href="">Contact Us</a>
          <a href="">Customer Support</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
