import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function CartCard({ cart, updateTotal }) {

  let price = cart.product.sellingprice;
  let [qut, Setqut] = useState(cart.quantity);
  let [subtotal, SetSubTotal] = useState(price * cart.quantity)

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const newSubTotal = price * qut
    const subtotalDifference = newSubTotal - subtotal;
    SetSubTotal(newSubTotal)
    updateTotal(subtotalDifference)
  }, [qut])

  var handleIncQut = (productId) => {
    Setqut((prev) => prev + 1)
    SetSubTotal(price * qut)

    const data = { userId: user._id, productId: productId, quantity: qut + 1 }
    // console.log(data)
    updateCart(data)
  }

  var handleDecQut = (productId) => {
    if (qut > 1) {
      Setqut((prev) => prev - 1);
    }

    const data = { userId: user._id, productId: productId, quantity: qut - 1 }
    updateCart(data)

  }

  const updateCart = async (data) => {
    try {
      const response = await api.post('/api/updatecart', data)
      // console.log(response)
    } catch (error) {
      // console.log(error)
    }
  }


  return (
    <>
      <div className="single-cart-area-list main  item-parent">
        <div className="product-main-cart">
          <div className="close section-activation">
            <img src="/images/shop/01.png" alt="shop" />
          </div>
          <div className="thumbnail">
            <img src={`${api.defaults.baseURL}uploads/products/${cart?.product?.images[0]}`} alt="shop" />
          </div>
          <div className="information">
            <h6 className="title">
              {cart.product.title}
            </h6>
            {/* <span>SKU:BG-1001</span> */}
            <span>Category: {cart.product.category}</span>
          </div>
        </div>
        <div className="price">
          <p>₹ {price}</p>
        </div>
        <div className="quantity">
          <div className="quantity-edit">
            <input type="text" className="input" value={qut} readOnly onChange={(e) => Setqut(e.target.value)} />
            <div className="button-wrapper-action">
              <button className="button" onClick={() => handleDecQut(cart?.product?._id)}>
                <i className="fa-regular fa-chevron-down" />
              </button>
              <button className="button plus" onClick={() => handleIncQut(cart?.product?._id)}>
                +<i className="fa-regular fa-chevron-up" />
              </button>
            </div>
          </div>
        </div>
        <div className="subtotal">
          <p>₹ {subtotal}</p>
        </div>
        {/* <div className="button-area">
          <a href="#" className="rts-btn btn-primary radious-sm with-icon">
            <div className="btn-text">Add To Cart</div>
            <div className="arrow-icon">
              <i className="fa-regular fa-cart-shopping" />
            </div>
            <div className="arrow-icon">
              <i className="fa-regular fa-cart-shopping" />
            </div>
          </a>
        </div> */}
      </div>
    </>
  );
}

export default CartCard;
