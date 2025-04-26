import './Dashboard.css';
import Navbar from '../../../Components/Admin/Navbar/Navbar';
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="graph">
          <h1>graph</h1>
        </div>

        <div className="dashboard-sec02">
          <div className="card">
            <h2>New Banner</h2>
            <img src="/images/Admin/offer-banner.jpg" alt="new banner" />
          </div>
          <div className="card">
            <h2>Recent Producs</h2>
            <img
              src="/images/Admin/book-shelf-cabinet.jpg"
              alt="book-shelf-cabinet.jpg"
            />
          </div>
          <div className="card">
            <h2>Users</h2>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div className="userCard" key={index}>
                  <i className="material-icons">account_circle</i>
                  <div className="emailAndphonenumber">
                    <p>Email ID : {item}</p>
                    <p>Phone Number : {item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
