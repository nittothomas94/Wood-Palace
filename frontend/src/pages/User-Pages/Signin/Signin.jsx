import './Signin.css';
import Input from '../../../Components/Input/Input';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
      <div className="signin-container">
        <h1>Create An Account</h1>
        <label>FULL NAME</label>
        <Input className="input-signin" />
        <label>EMAIL ID</label>
        <Input className="input-signin" />
        <label>PASSWORD</label>
        <Input className="input-signin" />
        <label>CONFORM PASSWORD</label>
        <Input className="input-signin" />
        <label>PHONE NUMBER</label>
        <Input className="input-signin" />
        <p>
          Don't have an accout? <Link to="/signup">Sigup</Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
