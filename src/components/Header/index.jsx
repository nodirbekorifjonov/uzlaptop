import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

// icons
import { RxHamburgerMenu } from "react-icons/rx";

// images
import logo from "../../assets/static/logo.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleBurger = () => {
    !showNav ? setShowNav(true) : setShowNav(false);
  };

  // after scrolling styles
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);
    // Clean up the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;
    // Set a threshold to determine when to apply the class (e.g., 100px from the top)
    const scrollThreshold = 100;
    // Update the state to apply/remove the class based on the scroll position
    setScrolled(scrollY > scrollThreshold);
  };
  // Define a class name based on the scroll state
  const headerClassName = `header ${scrolled ? "scrolled" : ""}`;
  return (
    <header className={headerClassName}>
      <div className="header__container container">
        {/* LOGO */}
        <Link to="/" className="sitelogo">
          <img src={logo} alt="" width={65} />
        </Link>
        {/* NAVBAR */}
        <nav className="sitenav">
          <ul className="sitenav__list">
            <li className="sitenav__item">
              <Link to="/" className="sitenav__link">
                Bosh sahifa
              </Link>
            </li>
            <li className="sitenav__item">
              <Link to="/shop" className="sitenav__link">
                Mahsulotlar
              </Link>
            </li>
            <li className="sitenav__item">
              <Link to="news" className="sitenav__link">
                Yangiliklar
              </Link>
            </li>
            <li className="sitenav__item">
              <Link to="/contact" className="sitenav__link">
                Bog'lanish
              </Link>
            </li>
          </ul>
        </nav>

        {/* NAVBAR MOBILE */}
        <div
          className={`header-mobile ${showNav ? "active" : ""}`}
          onClick={() => setShowNav(false)}
        >
          <nav className="sitenav-mobile">
            <ul className="sitenav-mobile__list">
              <li className="sitenav__item">
                <Link to="/" className="sitenav__link">
                  Bosh sahifa
                </Link>
              </li>
              <li className="sitenav__item">
                <Link to="/shop" className="sitenav__link">
                  Mahsulotlar
                </Link>
              </li>
              <li className="sitenav__item">
                <Link to="news" className="sitenav__link">
                  Yangiliklar
                </Link>
              </li>
              <li className="sitenav__item">
                <Link to="/contact" className="sitenav__link">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            to="https://abduganiqodirov.netlify.app/"
            target="_blank"
            className="header-mobile__btn site-btn"
          >
            VCARD
          </Link>
        </div>

        {/* BUTTONS */}
        <div className="header__btns">
          <Link
            to="https://abduganiqodirov.netlify.app/"
            target="_blank"
            className="header__btn site-btn"
          >
            VCARD
          </Link>

          <button className="hamburger" onClick={handleBurger}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
