import "./index.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="vite.svg" alt="" />
      <div className="navbar-text">
        <input id="search" type="search" placeholder="write here..." />
        <ul>
          <li>Go Back!</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
