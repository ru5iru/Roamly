import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Roamly</h1>
      </div>
        <div className="right">
          <div className="toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
