import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

  console.log("ID:", id);
  console.log("Selected Item:", result);

  return (
    <div>
      <div class="container bootdey">
        <div class="col-md-12">
          <section class="panel">
            <div class="panel-body">
              <div class="panel-body col-md-6">
                <div class="pro-img-details">
                  <img src={macbook} alt="" />
                </div>
                <div class="pro-img-list">
                  <a href="#/">
                    <img src={macbook} alt="" />
                  </a>
                  <a href="#/">
                    <img src={macbook} alt="" />
                  </a>
                  <a href="#/">
                    <img src={macbook} alt="" />
                  </a>
                  <a href="#/">
                    <img src={macbook} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <h4 class="pro-d-title">
                  <a href="#/" class="">
                    Leopard Shirt Dress
                  </a>
                </h4>
                <p>
                  Praesent ac condimentum felis. Nulla at nisl orci, at
                  dignissim dolor, The best product descriptions address your
                  ideal buyer directly and personally. The best product
                  descriptions address your ideal buyer directly and personally.
                </p>
                <div class="product_meta">
                  <span class="posted_in">
                    {" "}
                    <strong>Categories:</strong>{" "}
                    <a rel="tag" href="#/">
                      Jackets
                    </a>
                    ,{" "}
                    <a rel="tag" href="#/">
                      Men
                    </a>
                    ,{" "}
                    <a rel="tag" href="#/">
                      Shirts
                    </a>
                    ,{" "}
                    <a rel="tag" href="#/">
                      T-shirt
                    </a>
                    .
                  </span>
                  <span class="tagged_as">
                    <strong>Tags:</strong>{" "}
                    <a rel="tag" href="#/">
                      mens
                    </a>
                    ,{" "}
                    <a rel="tag" href="#/">
                      womens
                    </a>
                    .
                  </span>
                </div>
                <div class="m-bot15">
                  {" "}
                  <strong>Price : </strong> <span class="amount-old">$544</span>{" "}
                  <span class="pro-price"> $300.00</span>
                </div>
                <div class="form-group">
                  <label>Quantity</label>
                  <input
                    type="quantiy"
                    placeholder="1"
                    class="form-control quantity"
                  />
                </div>
                <p>
                  <button class="btn btn-round btn-danger" type="button">
                    <i class="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
