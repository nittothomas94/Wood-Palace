import Navbar from '../../../Components/User/Navbar/navbar';
import './home.css';
import Button from '../../../Components/Button/Button';
import Footer from '../../../Components/User/Footer/Footer';
const Home = () => {
  const chairs = [1, 2, 3];

  const WhyChooseUs = [
    {
      icon: 'local_shipping',
      title: 'Fast & Free Shipping',
    },
    {
      icon: 'shopping_bag',
      title: 'Easy To Shop',
    },
    {
      icon: 'support',
      title: '24/7 Support',
    },

    {
      icon: 'assignment_return',
      title: 'Return in 7 Days',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="section01-home">
          <div className="left">
            <h1>MODERN</h1>
            <h1>FURNITURE</h1>
            <h1>COLLECTIONS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              nobis minima voluptas est ad illum unde sit atque, nam qui, quasi
              quam molestiae placeat quas dicta eveniet suscipit, ratione
              incidunt?
            </p>
            <div className="shopnow-explore-buttons">
              <Button text="Shop Now" className="shopnow-explore-but shopnow" />
              <Button text="Explore" className="shopnow-explore-but explore" />
            </div>
          </div>
          <div className="rigt">
            <img
              src="https://i.pinimg.com/736x/38/f1/4e/38f14ef574452c4f029d1eb6f35d7c82.jpg"
              alt="15% Off image"
            />
          </div>
        </div>
        {/* Section 02 */}
        <div className="section02-home">
          <div className="crafted-with">
            <h1>
              Crafted with
              <br />
              Exlent
              <br />
              Material
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              error iure, culpa sequi soluta nemo officiis enim magni ab dolor
              voluptatum, quidem rerum maiores corrupti veniam, omnis eius
              porro. Architecto?
            </p>
          </div>

          {chairs.map((item, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src="https://i.pinimg.com/474x/66/e2/19/66e219639c4e65d599ac493f27ffc860.jpg"
                  alt=""
                />
                <h1>{item}</h1>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us section03*/}
        <div className="why-choose-us">
          <div className="why-choose-us-left">
            <div className="why-choose-us-left-top">
              <h1>Why Choose Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil expedita harum maiores, aspernatur assumenda nostrum fuga
                est nulla aut eligendi veritatis esse facere natus labore
                aperiam dolore earum perferendis!
              </p>
            </div>
            <div className="why-choose-us-left-bottom">
              {WhyChooseUs.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <i className="material-icons">{item.icon}</i>
                    <h3>{item.title}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi odio recusandae, excepturi explicabo non vitae sed
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="why-choose-us-right">
            <img
              src="https://i.pinimg.com/736x/81/50/3c/81503c638bc2aecd2580b0782d52f20c.jpg"
              alt=""
            />
          </div>
        </div>

        {/* section04 */}
        <div className="section04-home">
          <div className="we-help-you-images">
            <img
              src="https://i.pinimg.com/736x/27/59/8f/27598f4d06b6a5b9e8706aa771bc57d6.jpg"
              alt=""
              id="we-help-img01"
            />
            <img
              src="https://i.pinimg.com/736x/01/25/7b/01257b68a45e7b005f798eb6dac14ca6.jpg"
              alt=""
              id="we-help-img02"
            />
            <img
              src="https://i.pinimg.com/736x/45/1d/8a/451d8a186b0ce1302ad411b5769c96f3.jpg"
              alt=""
              id="we-help-img03"
            />
          </div>
          <div className="we-help-you">
            <h1>
              We Help You Make <br /> Modern Interior Design
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              officiis omnis laboriosam aut incidunt repellendus quia obcaecati
              quae, maxime molestias rem sit exercitationem dolorem, nostrum,
              nesciunt eum beatae laborum cumque.
            </p>

            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat earum velit numquam perferendis! Perspiciatis repellat
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quis, a soluta inventor
              </li>
            </ul>

            <Button text="Explore" className="we-help-you-explore" />
          </div>
        </div>

        {/*  structure it properly using semantic HTML, BEM class naming conventions, and manual CSS styling for better maintainability */}

        {/* WhatsApp Information Section 05 */}
        <div className="whatsapp-info-section05">
          <div className="whatsapp-info">
            <div className="whatsapp-info__header">
              <img
                src="/images/home/whatsapp-logo.jpg"
                alt="WhatsApp Logo"
                className="whatsapp-info__logo"
              />

              <h2 className="whatsapp-info__title">
                Get all information through WhatsApp!
              </h2>
            </div>

            <div className="whatsapp-info__body">
              <p className="whatsapp-info__text">
                Have any questions? Need more details about our products?
                Connect with us instantly on WhatsApp for quick support.
              </p>
              <a
                href="https://wa.me/9446979075"
                className="whatsapp-info__button"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
