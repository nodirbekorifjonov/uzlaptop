import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// data
import data from "../../assets/data/data.json";

// react-icons
import { SiAcer } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

// images
import siteLogo from "../../assets/static/logo.png";
import posterImg from "../../assets/static/footer-top.png";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* SUGGESTION SECTION */}
      <section className="suggest">
        <div className="suggest__container container">
          <h3 className="suggest__title">Siz uchun eng yaxshi takliflar!</h3>
          <div className="suggest__cards">
            {data.slice(0, 4).map((item) => {
              return (
                <div key={item.id} className="card">
                  <div className="card__img">
                    <img src={siteLogo} alt="" width={80} />
                  </div>
                  <h3 className="card__name">
                    {item.productName + item.screen}
                  </h3>
                  <div className="price-shop">
                    <p className="card__price">{item.price}$</p>
                    <Link to="" className="site-btn">
                      Batafsil
                    </Link>
                  </div>
                </div>
              );
            })}
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

      {/* SUGGESTION SECTION */}
      <section className="suggest">
        <div className="suggest__container container">
          <h3 className="suggest__title">Eng mashhur mahsulotlar!</h3>
          <div className="suggest__cards">
            {data.slice(0, 8).map((item) => {
              return (
                <div key={item.id} className="card">
                  <div className="card__img">
                    <img src={siteLogo} alt="" width={80} />
                  </div>
                  <h3 className="card__name">
                    {item.productName + item.screen}
                  </h3>
                  <div className="price-shop">
                    <p className="card__price">{item.price}$</p>
                    <Link to="" className="site-btn">
                      Batafsil
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/shop" className="suggest__link">
            <span>Barcha mahsulotlar</span> <BsArrowRight />
          </Link>
        </div>
      </section>

      {/* POSTER */}
      <section className="poster">
        <div className="poster__container container">
          <img src={posterImg} alt="" width={1150} />
        </div>
      </section>
    </>
  );
};

export default Home;
