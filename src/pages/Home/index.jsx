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
import macbook from "../../assets/static/macbook.png";
import posterImg from "../../assets/static/footer-top.png";
import Hero from "../../components/Hero";

const Home = () => {
  const findUniqueBrandNames = () => {
    const brandNamesSet = new Set();
    // Iterate through the data and add brand names to the set
    data.forEach((item) => {
      if (item.brand) {
        brandNamesSet.add(item.brand);
      }
    });

    // Convert the set to an array to get unique brand names
    const uniqueBrandNames = Array.from(brandNamesSet);

    // Get the count of unique brand names
    const brandCount = uniqueBrandNames.length;

    return { uniqueBrandNames, brandCount };
  };

  const { uniqueBrandNames, brandCount } = findUniqueBrandNames();
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* SUGGESTION SECTION */}
      <section className="suggest">
        <div className="suggest__container container">
          <h3 className="suggest__title">Siz uchun eng yaxshi takliflar!</h3>
          <div className="suggest__cards">
            {data.slice(0, 6).map((item) => {
              return (
                <Link to="/" key={item.id} className="card">
                  <div className="imgBox">
                    <img src={macbook} alt="" className="mouse" />
                  </div>

                  <div className="contentBox">
                    <h3>{item.productName + item.screen}</h3>
                    <h2 className="price">{item.price}$</h2>
                    <a href="#" className="buy">
                      Batafsil
                    </a>
                  </div>
                </Link>
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
            {uniqueBrandNames.map((brand, index) => (
              <Link key={index} to="/shop" className="brands__card">
                <div className="brands__card-img">
                  <FiShoppingBag />
                </div>
                <div className="brands__card-info">
                  <h3>{brand}</h3>
                  <p>{index + 1} ta mahsulot</p>
                </div>
              </Link>
            ))}
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
                <Link to="/" key={item.id} className="card">
                  <div className="imgBox">
                    <img src={macbook} alt="" className="mouse" />
                  </div>

                  <div className="contentBox">
                    <h3>{item.productName + item.screen}</h3>
                    <h2 className="price">{item.price}$</h2>
                    <a href="#" className="buy">
                      Batafsil
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link to="shop" className="suggest__link">
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
