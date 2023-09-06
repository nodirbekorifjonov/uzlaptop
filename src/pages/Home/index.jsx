import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// react-icons
import { SiAcer } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";

// images
import siteLogo from "../../assets/static/logo.png";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
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
                  />
                  <button type="submit" className="hero__btn">
                    Qidirish
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SUGGESTION SECTION */}
      <section className="suggest">
        <div className="suggest__container container">
          <h3 className="suggest__title">Siz uchun eng yaxshi takliflar!</h3>
          <div className="suggest__cards">
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <p className="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, debitis fuga adipisci ipsa asperiores quisquam
                pariatur doloribus quo ratione porro.
              </p>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <p className="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, debitis fuga adipisci ipsa asperiores quisquam
                pariatur doloribus quo ratione porro.
              </p>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <p className="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, debitis fuga adipisci ipsa asperiores quisquam
                pariatur doloribus quo ratione porro.
              </p>
            </div>
            <div className="card">
              <div className="card__img">
                <img src={siteLogo} alt="" width={80} />
              </div>
              <h3 className="card__name">Product Name</h3>
              <p className="card__price">RS.100,000.00</p>
              <p className="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, debitis fuga adipisci ipsa asperiores quisquam
                pariatur doloribus quo ratione porro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands">
        <div className="brands__container container">
          <h2 className="brands__title">Brendlar orqali tanlang</h2>
          <div className="brands__cards">
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
            <Link to="" className="brands__card">
              <div className="brands__card-img">
                <FiShoppingBag />
              </div>
              <div className="brands__card-info">
                <h3>Shop Name</h3>
                <p>24 Products</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
