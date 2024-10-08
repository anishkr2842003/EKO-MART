import React from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";

function FeaturedCard({product}) {
// console.log(product)
// if(product){
//   const {_id,brandname,category,description,originalprice,sellingprice,title,weight,images} = product
//   // console.log(_id)
// }

  return (
    <>
      <div className="swiper-slide">
        <div className="single-shopping-card-one">
          <div className="image-and-action-area-wrapper">
            <Link to={`/singleproduct/${product?._id}`} className="thumbnail-preview">
              <div className="badge">
                <span>
                  {product?.discount}% <br />
                  Off
                </span>
                <i className="fa-solid fa-bookmark" />
              </div>
              <img src={`${api.defaults.baseURL}uploads/products/${product?.images[0]}`} alt="grocery" />
            </Link>
            <div className="action-share-option">
              <div
                className="single-action openuptip message-show-action"
                data-flow="up"
                title="Add To Wishlist"
              >
                <i className="fa-light fa-heart" />
              </div>
              <div
                className="single-action openuptip"
                data-flow="up"
                title="Compare"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="fa-solid fa-arrows-retweet" />
              </div>
              <div
                className="single-action openuptip cta-quickview product-details-popup-btn"
                data-flow="up"
                title="Quick View"
              >
                <i className="fa-regular fa-eye" />
              </div>
            </div>
          </div>
          <div className="body-content">
            <a href="shop-details.html">
              <h4 className="title">
                {product?.title}
              </h4>
            </a>
            <span className="availability">{product?.weight} Pack</span>
            <div className="price-area">
              <span className="current">₹{Math.ceil(product?.sellingprice)}</span>
              <div className="previous">₹{product?.originalprice}</div>
            </div>
            <div className="cart-counter-action">
              <div className="quantity-edit">
                <input type="text" className="input" defaultValue={1} />
                <div className="button-wrapper-action">
                  <button className="button">
                    <i className="fa-regular fa-chevron-down" />
                  </button>
                  <button className="button plus">
                    +<i className="fa-regular fa-chevron-up" />
                  </button>
                </div>
              </div>
              <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                <div className="btn-text">Add</div>
                <div className="arrow-icon">
                  <i className="fa-regular fa-cart-shopping" />
                </div>
                <div className="arrow-icon">
                  <i className="fa-regular fa-cart-shopping" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
