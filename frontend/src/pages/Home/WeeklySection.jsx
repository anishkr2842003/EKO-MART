import React from "react";
import CatCard from "../../components/CatCard";
import FeaturedCard from "../../components/FeaturedCard";

function WeeklySection() {
  return (
    <>
      {/* best selling groceris */}
      <div className="weekly-best-selling-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-between">
                <h2 className="title-left">Weekly Best Selling Groceries</h2>
                <ul
                  className="nav nav-tabs best-selling-grocery"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Frozen Foods
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Diet Foods
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Healthy Foods
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="vitamine-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#vitamine"
                      type="button"
                      role="tab"
                      aria-controls="vitamine"
                      aria-selected="false"
                    >
                      Vitamin Items
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                {/* first tabs area start*/}
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row g-4">

                    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <FeaturedCard/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* best selling groceris end */}
    </>
  );
}

export default WeeklySection;
