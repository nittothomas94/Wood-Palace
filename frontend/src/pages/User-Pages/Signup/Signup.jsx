import './Signup.css';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="sign-container">
      <h1>Create An Account</h1>
      <label>FULL NAME</label>
      <Input className="input-signup" />
      <label>EMAIL ID</label>
      <Input className="input-signup" />
      <label>PASSWORD</label>
      <Input className="input-signup" />
      <label>CONFORM PASSWORD</label>
      <Input className="input-signup" />
      <label>PHONE NUMBER</label>
      <Input className="input-signup" />
      <p>
        Already have an accout? <Link to="/signin">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
