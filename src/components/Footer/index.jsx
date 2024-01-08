import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// images
import footerLogo from "../../assets/static/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__first">
          <Link to="/" className="footer__logo">
            <img src={footerLogo} alt="" width={138} />
            <h3>UZLAPTOP</h3>
          </Link>
        </div>
        <ul className="footer__list">
          <li className="footer__item">Sahifalar</li>
          <li className="footer__item footer__item-hover">
            <Link to="/" className="footer__link">
              Bosh sahifa
            </Link>
          </li>
          <li className="footer__item footer__item-hover">
            <Link to="/shop" className="footer__link">
              Mahsulotlar
            </Link>
          </li>
          <li className="footer__item footer__item-hover">
            <Link to="/news" className="footer__link">
              Yangiliklar
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">Kategoriyalar</li>
          <li className="footer__item footer__item-hover">
            <Link to="" className="footer__link">
              Acer
            </Link>
          </li>
          <li className="footer__item footer__item-hover">
            <Link to="" className="footer__link">
              Asus
            </Link>
          </li>
          <li className="footer__item footer__item-hover">
            <Link to="" className="footer__link">
              HP
            </Link>
          </li>
          <li className="footer__item footer__item-hover">
            <Link to="" className="footer__link">
              MacBook
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">Bog'lanish</li>
          <li className="footer__item footer__item-hover">
            <Link to="https://yandex.com/maps/-/CDQc4T2~" target="_blank">
              "Malika" savdo majmuasi, B43
            </Link>
          </li>
          <li className="footer__item footer__item-hover">
            <Link to="tel:+998971283333">+998971283333</Link>
          </li>
          <Link
            to="https://vcarduz.netlify.app/vcard/1"
            target="_blank"
            className="footer-vcard site-btn"
          >
            Bog'lanish
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
