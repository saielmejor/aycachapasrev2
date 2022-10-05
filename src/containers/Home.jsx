import React from "react";

import "./Home.css";
function Home() {
  return (
    <div className="home" id="home">
      <div className="home-container">
        <div className="home-header">
          <p className="home-p1">IT'S A GOOD DAY TO HAVE,</p>
          <h1 className="home-h1"> A CACHAPA!</h1>
          {/* <p className="home-p2">
            Bringing Venezuelan food and culture to New York City
          </p> */}
        </div>

        {/* <div className="home-header_overlay">
          <img src="./images/overlay.png" alt="overlay" />
          <div className="home-header_img">
            <img src="./images/cachapa.png" alt="cachapa" />
          </div>
        </div> */}
      </div>
      <div className="home-notice-container">
        <div className="home-reviews">
          <div className="home-reviews-img">
            <img src="./images/reviews.png" alt="review" />
          </div>

          <p style={{ fontWeight: "bold" }}>High Reviews</p>
          <p>
            Our customers enjoy our cachapas because of the rich taste and
            freshness.
          </p>
        </div>
        <div className="home-gluten">
          <div className="home-gluten-img">
            <img src="./images/gluten.png" alt="gluten" />
          </div>
          <p style={{ fontWeight: "bold" }}>100% Gluten-Free</p>
          <p>Our Cachapas are made without gluten. </p>
        </div>
        <div className="home-dairy">
          <div className="home-dairy-img">
            <img src="./images/dairy.png" alt="review" />
          </div>

          <p style={{ fontWeight: "bold" }}>Contains Dairy</p>
          <p>Our Cachapas contain dairy products such as milk and eggs.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
