import React from "react";
import "./style.css";

// images
import news1 from "../../assets/static/news1.jpg";
import news2 from "../../assets/static/news2.jpg";
import news3 from "../../assets/static/news3.jpg";
import news4 from "../../assets/static/news4.jpg";

const News = () => {
  return (
    <>
      <section className="news">
        <div className="news__container container">
          <h2>Yangiliklar</h2>
          <div className="news__cards">
            <img src={news1} alt="" />
            <img src={news2} alt="" />
            <img src={news3} alt="" />
            <img src={news4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
