import './price.css';
import Input from '../Input/Input';

const Price = ({ onPriceSelect }) => {
  const onChange = event => {
    onPriceSelect(event.target.value); // Call the parent function with the selected price value
  };

  return (
    <>
      <div className="price">
        <h2>Price</h2>
        <Input
          type="radio"
          label="1000-2000"
          value="1000-2000"
          name="price"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="2000-3000"
          value="2000-3000"
          name="price"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="3000-4000"
          value="3000-4000"
          name="price"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="4000-5000"
          value="4000-5000"
          name="price"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="5000-6000"
          value="5000-6000"
          name="price"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Price;

// To ensure only one option can be selected at a time, you need to give all radio buttons the same name attribute
