import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselBox() {
  const images = [
    {
      id: 1,
      src: "../../img/slider/slide1.jpg",
      alt: "Burger 1",
    },
    {
      id: 2,
      src: "../../img/slider/slide2.jpg",
      alt: "Burger 2",
    },
    {
      id: 3,
      src: "../../img/slider/slide3.jpg",
      alt: "Burger 3",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <div>
      <Slider className="carousel" {...settings}>
        {images.map((item) => (
          <div className="carousel" key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
