import React from "react";
import "./style.css";

// images
import logo from "../../assets/static/logo2.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contacts">
        <div className="contact__container container">
          <h2 className="contact__title">Aloqa kartalari</h2>
          <div className="contact__cards">
            <div className="contact__card">
              <div className="contact__info">
                <div className="contact__img"></div>
                <h3>Abdug'ani Qodirov</h3>
              </div>
              <ul className="contact__links">
                <li>
                  <span>Mobil telefon:</span>
                  <Link to="tel:+998971283333" target="_blank">
                    +998971283333
                  </Link>
                </li>
                <li>
                  <span>Instagram</span>
                  <Link to="https://instagram.com/uz_laptop" target="_blank">
                    uz_Laptop
                  </Link>
                </li>
                <li>
                  <span>Telegram</span>
                  <Link to="https://t.me/uzlaptop" target="_blank">
                    Uz Laptop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
