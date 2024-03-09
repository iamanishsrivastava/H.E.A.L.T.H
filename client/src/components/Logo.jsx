import "./Logo.css";

const Logo = () => {
   return (
      <a
          className="brand-logo-container"
          href="https://projecthealth.vercel.app"
        >
          <img src="../../res/img/logo.png" alt="H.E.A.L.T.H" id="logo" />
          <p id="brand-name">H.E.A.L.T.H</p>
        </a>
   )
}

export default Logo;