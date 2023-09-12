import React, { useState } from "react";
import "./style.css";
import Hero from "../../components/Hero";

import siteLogo from "../../assets/static/logo.png";
import { Link } from "react-router-dom";

const Shop = () => {
  const [price, setPrice] = useState(350);
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* Products */}
      <section className="products">
        <div className="products__container container">
          <aside className="filter">
            <form>
              <div className="filter__hero">
                <h3>Filter</h3>
                <button type="reset" onClick={() => setPrice(4000)}>
                  Tozalash
                </button>
              </div>
              <div className="filter__line"></div>
              <h3 className="price__title">Narxlar</h3>
              <input
                type="range"
                name="range__name"
                id="range__id"
                min={350}
                max={6000}
                value={price}
                onChange={(changeEvent) => setPrice(changeEvent.target.value)}
              />
              <p>Maksimal narx: {price}$</p>
              <div className="filter__line"></div>

              <div className="categories">
                <h3 className="categories__title">Kategoriyalar</h3>
                <div className="categories__brands">
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>Acer</span>
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>HP</span>
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>Dell</span>
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>Asus</span>
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>MacBook</span>
                  </label>
                </div>
              </div>
            </form>
          </aside>

          <div className="cards__container">
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <Link to="" className="site-btn">
                Batafsil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
