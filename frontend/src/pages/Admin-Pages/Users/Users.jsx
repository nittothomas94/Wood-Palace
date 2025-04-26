import './Users.css';
import Navbar from '../../../Components/Admin/Navbar/Navbar';
const Users = () => {
  return (
    <>
      <Navbar />
      <div className="users">
        <h1>Users</h1>
        <div className="users-box"></div>
      </div>
    </>
  );
};

export default Users;
