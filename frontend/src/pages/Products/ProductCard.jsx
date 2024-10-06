import React from "react";

function ProductCard() {
  return (
    <>
      <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="single-shopping-card-one">
          {/* iamge and sction area start */}
          <div className="image-and-action-area-wrapper">
            <a href="shop-details.html" className="thumbnail-preview">
              <div className="badge">
                <span>
                  25% <br />
                  Off
                </span>
                <i className="fa-solid fa-bookmark" />
              </div>
              <img src="/images/grocery/01.jpg" alt="grocery" />
            </a>
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
          {/* iamge and sction area start */}
          <div className="body-content">
            <a href="shop-details.html">
              <h4 className="title">
                Best Cerelac Mixed Fruits &amp; Wheat with Milk
              </h4>
            </a>
            <span className="availability">500g Pack</span>
            <div className="price-area">
              <span className="current">$36.00</span>
              <div className="previous">$36.00</div>
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
                <div className="btn-text">Add To Cart</div>
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

export default ProductCard;
