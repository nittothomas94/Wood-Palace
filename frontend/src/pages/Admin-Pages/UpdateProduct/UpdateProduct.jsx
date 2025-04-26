import './UpdateProduct.css';
import Navbar from '../../../Components/Admin/Navbar/Navbar';
import Input from '../../../Components/Input/Input';
const UpdateProduct = () => {
  return (
    <>
      <Navbar />
      <div className="update-product">
        <div className="update_stoke">
          <h2>Stoke</h2>
          <Input label="Stoke" type="radio" />
          <Input label="Out Of Stoke" type="radio" />
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
