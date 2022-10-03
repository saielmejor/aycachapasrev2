import React from "react";
import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../constants";
const galleryImages = [images.gallery01, images.gallery02, images.gallery03];
function Gallery() {
  const scrollRef = React.useRef(null);
  // create a function to scroll the images
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery" id="gallery">
      <div className="gallery-content">
        <h1 className="gallery-title"> Our Gallery </h1>
        <p>Follow our instagram @ay.cachapas for more!</p>

        <div className="gallery-images">
          <div className="gallery-images_container " ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div
                className="gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
            <div className="gallery-images_arrows">
              <BsArrowLeftShort
                className="gallery__arrow-icon"
                onClick={() => scroll("left")}
              />
              <BsArrowRightShort
                className="gallery__arrow-icon"
                onClick={() => scroll("right")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-hero">
        {" "}
        <img src="../images/hero01.png" alt="hero" />
        <img
          src="../images/instagram.png"
          alt="instagram"
          style={{ marginRight: "0px", marginLeft: "50px" }}
        />
      </div>
    </div>
  );
}

export default Gallery;
