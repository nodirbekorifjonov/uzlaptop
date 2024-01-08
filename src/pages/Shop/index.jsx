import React, { useState } from "react";
import "./style.css";
import Hero from "../../components/Hero";

import macbook from "../../assets/static/macbook.png";
import { Link } from "react-router-dom";

// react-icons
import { BsCpu } from "react-icons/bs";

// data
import data from "../../assets/data/data.json";

const Shop = () => {
  const [price, setPrice] = useState(4000);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Filter the data based on selected price and brand(s)
  const filteredData = data.filter((item) => {
    const priceCondition = item.price <= price;
    const brandCondition =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    return priceCondition && brandCondition;
  });

  const handleBrandCheckboxChange = (brand) => {
    // Toggle the selection of a brand
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
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
                <button type="reset" onClick={() => setPrice(2000)}>
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
                  {[
                    "Acer",
                    "HP",
                    "Dell",
                    "Asus",
                    "Macbook",
                    "Huawei",
                    "Samsung",
                  ].map((brand) => (
                    <label key={brand}>
                      <input
                        type="checkbox"
                        name={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandCheckboxChange(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </aside>

          <div className="cards__container">
            {filteredData.map((item) => {
              return (
                <Link to={`/shop/${item.id}`} key={item.id} className="card">
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
    </>
  );
};

export default Shop;
