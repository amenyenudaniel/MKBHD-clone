import React from "react";
import "./Main.css";
import product1 from "../../assets/1.webp";
import product2 from "../../assets/2.webp";
import product3 from "../../assets/3.webp";
import product4 from "../../assets/4.webp";
import product5 from "../../assets/5.webp";
import product6 from "../../assets/6.webp";
import product7 from "../../assets/7.webp";
import product8 from "../../assets/8.webp";
import product9 from "../../assets/9.webp";
import product10 from "../../assets/10.webp";
import product11 from "../../assets/11.webp";
import product12 from "../../assets/12.jpeg";
import product13 from "../../assets/13.jpeg";
import product14 from "../../assets/14.webp";
import product15 from "../../assets/15.webp";
import product16 from "../../assets/16.jpeg";

const Main = ({ darkmode }) => {
  return (
    <main
      style={
        darkmode
          ? { backgroundColor: "var(--darker)", color: "white" }
          : { backgroundColor: "", color: "" }
      }
    >
      <div className="grid__container">
        <div className="main__card">
          <div className="plus">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
          <div className="main__container">
            <div
              className="product__container product1"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product1} alt="product" />
                </div>
                <h3>MATTE BLACK EVERYTHING WALLET</h3>
                <p>$59.00</p>
              </div>
            </div>

            <div
              className="product__container "
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product2} alt="product" />
                </div>
                <h3>CHEVRON HOODIE</h3>
                <p>$65.00</p>
              </div>
            </div>
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product3} alt="product" />
                </div>
                <h3>HISTOGRAM T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product4} alt="product" />
                </div>
                <h3>PARALLELOGRAM T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main__card">
          <div className="plus">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
          <div className="main__container">
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product5} alt="product" />
                </div>
                <h3>LONGSLEEVE SHIRT</h3>
                <p>$40.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product6} alt="product" />
                </div>
                <h3>BLACK CORE LOGO T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product11} alt="product" />
                </div>
                <h3>CORE LOGO WINDBREAKER [BLACK/CAMO]</h3>
                <p>$40.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product12} alt="product" />
                </div>
                <h3>30 FPS T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main__card">
          <div className="plus">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
          <div className="main__container">
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product9} alt="product" />
                </div>
                <h3>DESK MAT</h3>
                <p>$30.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product10} alt="product" />
                </div>
                <h3>KEYBOARD T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product7} alt="product" />
                </div>
                <h3>STUDIO T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product8} alt="product" />
                </div>
                <h3>CORE LOGO WINDBREAKER</h3>
                <p>$40.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main__card">
          <div className="plus">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
          <div className="main__container">
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product13} alt="product" />
                </div>
                <h3>
                  MKBHD X MOMENT LEATHER STRAP FOR APPLE WATCH *CLEARANCE*
                </h3>
                <p>$40.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product14} alt="product" />
                </div>
                <h3>MATTE BLACK EVERYTHING T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>
            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product15} alt="product" />
                </div>
                <h3>PEACE T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>

            <div
              className="product__container"
              style={
                darkmode
                  ? { backgroundColor: "var(--dark)" }
                  : { backgroundColor: "" }
              }
            >
              <div className="product__card">
                <div className="product__image">
                  <img src={product16} alt="product" />
                </div>
                <h3>BLUE CHEVRON T-SHIRT</h3>
                <p>$29.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main__card">
          <div className="plus">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
        </div>
      </div>

      <p className="button last--btn">BROWSE ALL PRODUCTS</p>
    </main>
  );
};

export default Main;
