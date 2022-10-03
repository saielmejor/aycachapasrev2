import React from "react";
import "./Menu.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { data } from "../constants";
import { useState } from "react";

//MenuDishes image
const MenuDishes = ({ dishes: { imageUrl, title, description } }) => (
  <div className="dishes-card">
    <img src={imageUrl} alt="dishes" />
    <div className="dishes-card-content">
      {" "}
      <p style={{ fontWeight: "bold" }}>{title}</p> <p>{description}</p>
    </div>
  </div>
);

function Menu(index) {
  // usestate for moving dot
  const [slideIndex, setSlideIndex] = useState(1);

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
if(direction=== 'right' ) { 
  current.scrollLeft +=300  ; 

} else{ 
  current.scrollLeft -=300  ;
}

  };

  return (
    <div className="menu" id="menu">
      <div className="menu-title">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-container">
        <div className="menu-dishes-container">
          <div className="menu-dishes-card" ref={scrollRef}>
            {data.dishes.map((dishes) => (
              <MenuDishes dishes={dishes} key={dishes.key} />
            ))}
          </div>
          <div className="menu-images_arrows">
            <BsArrowLeftShort
              className="menu__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="menu__arrow-icon"
              onClick={() => scroll('right')}
            />
          </div>
        </div>
        {/* creates the dots */}
        {/* <div className="dots-container">
          {Array.from({ length: 3 }).map((item, index) => (
            <div className={slideIndex === index + 1 ? "dot active" : "dot"}>
              {" "}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
