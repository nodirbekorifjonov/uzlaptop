import React from "react";
import "./style.css";

// react-icons
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__info">
            <h1 className="hero__title">
              Keng Turdagi Sifatli <span>Assortiment</span>
            </h1>
            <form className="hero__form">
              <label>
                <input type="text" placeholder="Bu yerda mahsulotni qidiring" />
                <button type="submit" className="hero__btn">
                  <BiSearch />
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
