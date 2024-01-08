import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// styles
import "./style.css";

// react icons
import { SlScreenDesktop } from "react-icons/sl";

// import required modules
import { EffectCards } from "swiper/modules";

// data
import data from "../../../assets/data/data.json";

// images
import macbook from "../../../assets/static/macbook.png";

const ShopDetails = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foundItem = data.find((item) => item.id === Number(id));
    setResult(foundItem);
  }, [id]);

  return (
    <section className="details">
      <div className="details-container container">
        <div className="details__img">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={macbook} alt="" className="sliderImage" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={macbook} alt="" className="sliderImage" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={macbook} alt="" className="sliderImage" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={macbook} alt="" className="sliderImage" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={macbook} alt="" className="sliderImage" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="details__info">
          <h3 className="details__title">{result.productName}</h3>
          <p className="details__description">{result.description}</p>
          <span className="details__line"></span>
          <ul className="details__list">
            <li className="details__item">
              <span>Ekran: </span>
              {result.screen}
            </li>
            <li className="details__item">
              <span>CPU: </span>
              {result.cpu}
            </li>
            <li className="details__item">
              <span>Ram: </span>
              {result.ram}
            </li>
            <li className="details__item">
              <span>Хотира: </span>
              {result.storage}
            </li>
            {/* <li className="details__item">
              <span>Ekran: </span>
              {result.screen}
            </li> */}
          </ul>
          <div className="details__allprices">
            {/* {result.oldPrice && (
              <span className="details__old-price">{result.oldPrice}</span>
            )} */}
            <h3 className="details__price">${result.price}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
