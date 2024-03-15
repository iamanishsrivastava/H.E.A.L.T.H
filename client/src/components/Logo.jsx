import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="brand-logo-container">
      <img src="/logo.png" alt="H.E.A.L.T.H" id="logo" />
      <p id="brand-name">E.A.L.T.H</p>
    </Link>
  );
};

export default Logo;
