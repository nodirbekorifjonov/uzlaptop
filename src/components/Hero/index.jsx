import React, { useState } from "react";
import "./style.css";

// react-icons
import { BiSearch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// components
// import Search from "../Search";

const Hero = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      {showSearch && (
        <div className="search">
          <div
            className="search__close"
            onClick={() =>
              !showSearch ? setShowSearch(true) : setShowSearch(false)
            }
          >
            <IoClose />
          </div>
          <h2>Mahsulotni izlash</h2>
          <form>
            <input type="search" />
            <button type="submit" className="search__btn">
              <FaSearch />
            </button>
          </form>
          <div
            className="search-overlay"
            onClick={() =>
              !showSearch ? setShowSearch(true) : setShowSearch(false)
            }
          ></div>
        </div>
      )}
      <section className="hero">
        <div className="hero__container container">
          <div className="hero__content">
            <div className="hero__info">
              <h1 className="hero__title">
                Keng Turdagi Sifatli <span>Assortiment</span>
              </h1>
              <form className="hero__form">
                <label>
                  <input
                    type="text"
                    placeholder="Bu yerda mahsulotni qidiring"
                    onClick={() =>
                      !showSearch ? setShowSearch(true) : setShowSearch(false)
                    }
                  />
                  <button type="submit" className="hero__btn">
                    <BiSearch />
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
