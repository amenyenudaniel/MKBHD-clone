import React, { useState, useEffect } from "react";
import "./Header.css";
import videoBg from "../../assets/video-bg-light.mp4";
import darkBg from "../../assets/dark-bg.mp4";
import { ShoppingCart } from "phosphor-react";
import { FaYoutube, FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo-dark.png";
import logoDark from "../../assets/logo-light.png";
import Toggle from "../toggle/Toggle";

const Header = ({ setDarkmode, darkmode }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["nav"];

  if (scrolled) {
    if (darkmode) {
      navbarClasses.push("sticky-dark");
    } else {
      navbarClasses.push("sticky");
    }
  }
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header">
      <div className="overlay__header">
        <nav className={navbarClasses.join(" ")}>
          <GiHamburgerMenu
            className="open"
            onClick={() => setToggleMenu(true)}
            style={darkmode ? { color: "white" } : { color: "" }}
          />
          <div
            className="app__navbar-icons"
            style={darkmode ? { color: "white" } : { color: "" }}
          >
            <Toggle darkmode={darkmode} setDarkmode={setDarkmode} />
            <i>
              <FaYoutube className="all--icons" />
            </i>
            <i>
              <FaInstagram className="all--icons" />
            </i>
            <i>
              <FaTwitter className="all--icons" />
            </i>
            <i>
              <FaDiscord className="all--icons" />
            </i>
          </div>
          <div className="app__navbar-logo">
            {darkmode ? (
              <img src={logoDark} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>

          <div
            className="app__navbar-links"
            style={darkmode ? { color: "white" } : { color: "" }}
          >
            <a href="#c" className="a--tags">
              Shop
            </a>
            <a href="#nn">MKBHD</a>
            <a href="#c">The Studio</a>
            <a href="#s">Podcasts</a>
            <a href="#c">AutoFocus</a>
            <a href="#s">Apply</a>
            <i>
              <ShoppingCart
                className="cart--icon all--icons"
                style={darkmode ? { color: "white" } : { color: "" }}
              />
            </i>
          </div>

          <i className="small__screen-icon">
            <ShoppingCart
              className="cart--icon all--icons"
              style={darkmode ? { color: "white" } : { color: "" }}
            />
          </i>
        </nav>
        {toggleMenu && (
          <div className="overlay__mobile slideFromLeft">
            <div
              className="overlay__content slideFromLeft"
              style={
                darkmode
                  ? { backgroundColor: "var(--darker)", color: "white" }
                  : { backgroundColor: "", color: "" }
              }
            >
              <RiCloseLine
                className="close all--icons"
                onClick={() => setToggleMenu(false)}
              />
              <div className="small__logo" onClick={() => setToggleMenu(false)}>
                {darkmode ? (
                  <img src={logoDark} alt="logo" />
                ) : (
                  <img src={logo} alt="logo" />
                )}
              </div>

              <div className="overlay__links">
                <a href="#x" onClick={() => setToggleMenu(false)}>
                  Shop
                </a>
                <a href="#s" onClick={() => setToggleMenu(false)}>
                  MKBHD
                </a>
                <a href="#c" onClick={() => setToggleMenu(false)}>
                  The Studio
                </a>
                <a href="#v" onClick={() => setToggleMenu(false)}>
                  Podcasts
                </a>
                <a href="#d" onClick={() => setToggleMenu(false)}>
                  AutoFocus
                </a>
                <a href="#v" onClick={() => setToggleMenu(false)}>
                  Apply
                </a>
              </div>

              <div className="toggle">
                <Toggle darkmode={darkmode} setDarkmode={setDarkmode} />
              </div>

              <div className="overlay__icons">
                <i>
                  <FaYoutube
                    className="all--icons"
                    onClick={() => setToggleMenu(false)}
                  />
                </i>
                <i>
                  <FaInstagram
                    className="all--icons"
                    onClick={() => setToggleMenu(false)}
                  />
                </i>
                <i>
                  <FaTwitter
                    className="all--icons"
                    onClick={() => setToggleMenu(false)}
                  />
                </i>
                <i>
                  <FaDiscord
                    className="all--icons"
                    onClick={() => setToggleMenu(false)}
                  />
                </i>
              </div>
            </div>
          </div>
        )}
      </div>

      <header>
        <h1 style={darkmode ? { color: "white" } : { color: "" }}>
          QUALITY TECH VIDEOS
        </h1>
        <div
          className="header__buttons"
          style={darkmode ? { color: "var(--black)" } : { color: "" }}
        >
          <div className="button first__btn">
            <button>SHOP NOW</button>
          </div>
          <div className={darkmode ? "button__dark" : "button"}>
            <i>
              <FaYoutube />
            </i>

            <button
              style={darkmode ? { color: "var(--black)" } : { color: "" }}
            >
              MKBHD
            </button>
          </div>
          <div className={darkmode ? "button__dark" : "button"}>
            <i>
              <FaYoutube />
            </i>

            <button
              style={darkmode ? { color: "var(--black)" } : { color: "" }}
            >
              THE STUDIO
            </button>
          </div>
          <div className={darkmode ? "button__dark" : "button"}>
            <i>
              <FaYoutube />
            </i>

            <button
              style={darkmode ? { color: "var(--black)" } : { color: "" }}
            >
              PODCAST
            </button>
          </div>
          <div className={darkmode ? "button__dark" : "button"}>
            <i>
              <FaYoutube />
            </i>

            <button
              style={darkmode ? { color: "var(--black)" } : { color: "" }}
            >
              AUTOFOCOS
            </button>
          </div>
          <div className={darkmode ? "button__dark" : "button"}>
            <i>
              <FaYoutube />
            </i>

            <button
              style={darkmode ? { color: "var(--black)" } : { color: "" }}
            >
              APPLY
            </button>
          </div>
        </div>
      </header>
      {darkmode ? (
        <video src={darkBg} autoPlay muted loop></video>
      ) : (
        <video src={videoBg} autoPlay muted loop></video>
      )}
    </div>
  );
};

export default Header;
