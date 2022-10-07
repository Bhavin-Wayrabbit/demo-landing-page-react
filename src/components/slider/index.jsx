import React, { useState, useEffect } from "react";
import "./style.css";
import Seprator from "../seprator";

function imgGenrate() {
  return (
    "https://picsum.photos/" +
    (200 + Math.floor(Math.random() * 90)) +
    "/" +
    (300 + Math.floor(Math.random() * 90)) +
    "?random=1"
  );
}

export default function CustomerReviewSlider({ slides }) {
  const SliderData = [
    {
      id: 1,
      name: "Edward Newgate",
      title: "Founder Circle",
      proImage: imgGenrate(),
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
    {
      id: 2,
      name: "Edward Newgate 2",
      title: "Founder Circle",
      proImage: imgGenrate(),
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
    {
      id: 3,
      name: "Edward Newgate 3",
      title: "Founder Circle",
      proImage: imgGenrate(),
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
    {
      id: 4,
      name: "Edward Newgate 4",
      title: "Founder Circle",
      proImage: imgGenrate(),
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 4000);

    return () => clearInterval(interval);
  });

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slider-main">
      <div className="slider-card">
        {/* <img src={slide.image} alt="travel" className="image" /> */}
        <div className="slider-head">
          <p className="slider-head-title">What our customer are saying</p>
          <Seprator
            style={{
              backgroundColor: "#fff",
              margin: "0px 0px 60px 0px",
            }}
          />
        </div>
        <section className="slider">
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="slider-body">
                    <div className="slider-body-l">
                      <div className="slider-b-l-img-con">
                        <img
                          src={slide.proImage}
                          alt=""
                          className="slider-pro-img"
                        />
                      </div>
                      <div className="slider-b-l-pro-info">
                        <div className="slider-b-l-pro-info-name">
                          {slide.name}
                        </div>
                        <div className="slider-b-l-pro-info-role">
                          {slide.title}
                        </div>
                      </div>
                    </div>
                    <div className="slider-body-r">
                      <p className="slider-b-r-quote">“{slide.quote}”</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
