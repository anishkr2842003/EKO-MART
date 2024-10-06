import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <>
      <Header />

      <div>
        {/* rts navigation bar area start */}
        <div className="rts-navigation-area-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="navigator-breadcrumb-wrapper">
                  <a href="index.html">Home</a>
                  <i className="fa-regular fa-chevron-right" />
                  <a className="current" href="index.html">
                    Shop Grid Sidebar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts navigation bar area end */}
        <div className="section-seperator">
          <div className="container">
            <hr className="section-seperator" />
          </div>
        </div>
        {/* shop[ grid sidebar wrapper */}
        <div className="shop-grid-sidebar-area rts-section-gap">
          <div className="container">
            <div className="row g-0">
              <div className="col-xl-3 col-lg-12 pr--70 pr_lg--10 pr_sm--10 pr_md--5 rts-sticky-column-item">
                <div className="sidebar-filter-main theiaStickySidebar">
                  <div className="single-filter-box">
                    <h5 className="title">Widget Price Filter</h5>
                    <div className="filterbox-body">
                      <form action="#" className="price-input-area">
                        <div className="half-input-wrapper">
                          <div className="single">
                            <label htmlFor="min">Min price</label>
                            <input id="min" type="text" defaultValue={0} />
                          </div>
                          <div className="single">
                            <label htmlFor="max">Max price</label>
                            <input id="max" type="text" defaultValue={150} />
                          </div>
                        </div>
                        <input type="range" className="range" />
                        <div className="filter-value-min-max">
                          <span>Price: $10 — $90</span>
                          <button className="rts-btn btn-primary">
                            Filter
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="single-filter-box">
                    <h5 className="title">Product Categories</h5>
                    <div className="filterbox-body">
                      <div className="category-wrapper ">
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat1" type="checkbox" />
                          <label htmlFor="cat1">Beverages</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat2" type="checkbox" />
                          <label htmlFor="cat2">Biscuits &amp; Snacks</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat3" type="checkbox" />
                          <label htmlFor="cat3">Breads &amp; Bakery</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat4" type="checkbox" />
                          <label htmlFor="cat4">Breakfast &amp; Dairy</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat7" type="checkbox" />
                          <label htmlFor="cat7">Grocery &amp; Staples</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat6" type="checkbox" />
                          <label htmlFor="cat6">Fruits &amp; Vegetables</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat8" type="checkbox" />
                          <label htmlFor="cat8">Household Needs</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat10" type="checkbox" />
                          <label htmlFor="cat10">Meats &amp; Seafood</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat80" type="checkbox" />
                          <label htmlFor="cat80">Grocery &amp; Staples</label>
                        </div>
                        {/* single category end */}
                      </div>
                    </div>
                  </div>
                  <div className="single-filter-box">
                    <h5 className="title">Product Status</h5>
                    <div className="filterbox-body">
                      <div className="category-wrapper">
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat11" type="checkbox" />
                          <label htmlFor="cat11">In Stock</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat12" type="checkbox" />
                          <label htmlFor="cat12">On Sale</label>
                        </div>
                        {/* single category end */}
                      </div>
                    </div>
                  </div>
                  <div className="single-filter-box">
                    <h5 className="title">Select Brands</h5>
                    <div className="filterbox-body">
                      <div className="category-wrapper">
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat13" type="checkbox" />
                          <label htmlFor="cat13">Frito Lay</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat14" type="checkbox" />
                          <label htmlFor="cat14">Nespresso</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat15" type="checkbox" />
                          <label htmlFor="cat15">Oreo</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat16" type="checkbox" />
                          <label htmlFor="cat16">Quaker</label>
                        </div>
                        {/* single category end */}
                        {/* single category */}
                        <div className="single-category">
                          <input id="cat17" type="checkbox" />
                          <label htmlFor="cat17">Welch's</label>
                        </div>
                        {/* single category end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-12">
                <div className="filter-select-area">
                  <div className="top-filter">
                    <span>Showing 1–20 of 57 results</span>
                    <div className="right-end">
                      <span>Sort: Short By Latest</span>
                      <div className="button-tab-area">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link single-button active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="home-tab-pane"
                              aria-selected="true"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                                <rect
                                  x="0.5"
                                  y="9.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                                <rect
                                  x="9.5"
                                  y="0.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                                <rect
                                  x="9.5"
                                  y="9.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link single-button"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="profile-tab-pane"
                              aria-selected="false"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3C28"
                                />
                                <rect
                                  x="0.5"
                                  y="9.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3C28"
                                />
                                <rect
                                  x={9}
                                  y={3}
                                  width={7}
                                  height={1}
                                  fill="#2C3C28"
                                />
                                <rect
                                  x={9}
                                  y={12}
                                  width={7}
                                  height={1}
                                  fill="#2C3C28"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nice-select-area-wrapper-and-button">
                    <div className="nice-select-wrapper-1">
                      <div className="single-select">
                        <select>
                          <option data-display="All Categories">
                            All Categories
                          </option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                      <div className="single-select">
                        <select>
                          <option data-display="All Brands">All Brands</option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                      <div className="single-select">
                        <select>
                          <option data-display="All Size">All Size </option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                      <div className="single-select">
                        <select>
                          <option data-display="All Weight">All Weight</option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                    </div>
                    <div className="button-area">
                      <button className="rts-btn">Filter</button>
                      <button className="rts-btn">Reset Filter</button>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div className="row g-4 mt-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop[ grid sidebar wrapper end */}
      </div>

      <Footer />
    </>
  );
}

export default Products;
