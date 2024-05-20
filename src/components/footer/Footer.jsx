import "./Footer.css";
import logo from "../../assets/logo-dark.png";
import logoDark from "../../assets/logo-light.png";
const Footer = ({ darkmode }) => {
  return (
    <div
      className="footer"
      style={
        darkmode
          ? { backgroundColor: "var(--darker)" }
          : { backgroundColor: "" }
      }
    >
      <footer
        style={
          darkmode
            ? { color: "white", backgroundColor: "var(--dark)" }
            : { color: "", backgroundColor: "" }
        }
      >
        <h1>
          MATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHIMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHINGMATTEBLACKEVERYTHI
        </h1>
        <div className="footer__logo">
          {darkmode ? (
            <img src={logoDark} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </div>

        <div className="footer__content__container">
          <div className="footer__content1">
            <p>+</p>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Returns & FAQ</a>
            <p>+</p>
          </div>

          <div className="footer__content2">
            <p>+</p>
            <h6 className="copyright">© 2023 MKBHD</h6>
            <a href="#">Powered by Fourthwall</a>
            <p>+</p>
          </div>
        </div>

        <div className="footer__mobile">
          <div className="plus3">
            <p>+</p>
            <p>+</p>
          </div>
          <div className="footer__content">
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Returns & FAQ</a>
          </div>
          <div className="footer__content3">
            <h6 className="copyright">© 2023 MKBHD</h6>

            <p>Powered by Fourthwall</p>
          </div>
          <div className="plus3">
            <p>+</p>
            <p>+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
