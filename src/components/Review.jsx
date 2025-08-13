// components/TestimonialSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "PRIYA SHARMA",
    quote:
      "IndUS Synergy Partners simplified what felt impossible—navigating Indian inheritance laws while managing my U.S.-based assets.",
  },
  {
    name: "RAHUL MEHRA",
    quote:
      "Clear advice. No surprises. The team gave us total confidence in handling a multi-jurisdiction property dispute.",
  },
  {
    name: "ANJALI RAO",
    quote:
      "Legal clarity, sharp strategy, and seamless execution. I couldn’t have asked for a better cross-border legal partner.",
  },
  {
    name: "VIKRAM SETH",
    quote:
      "They translated complex Indian corporate compliance into a simple roadmap. Truly a strategic legal ally.",
  },
  {
    name: "NEHA GUPTA",
    quote:
      "Every step was structured, secure, and transparent. Their wealth planning advice was instrumental for my clients.",
  },
  {
    name: "AMIT KHANNA",
    quote:
      "Their counsel helped us set up a fully compliant cross-border trust. Efficient, ethical, and forward-thinking.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font bg-white" style={{ marginTop: '-10rem' }}>
      <div className="container px-5 py-8 mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-[1.8rem] md:text-[2.25rem] font-[800] text-[#2d2d2d] inline-block relative pb-2"
            style={{ marginTop: '1.5rem' }}
          >
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 text-[1rem] mt-2 max-w-xl mx-auto">
            Trusted by international families, professionals, and entrepreneurs navigating complex cross-border legal and wealth matters.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="h-full text-center bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                <div className="text-gray-300 text-6xl mb-6">
                  <FaUserCircle className="mx-auto" />
                </div>
                <p className="leading-relaxed text-gray-700 mb-4">{item.quote}</p>
                <span className="inline-block h-1 w-10 rounded mb-4" style={{ backgroundColor: "#2d2d2d" }}></span>
                <h2 className="text-gray-900 font-semibold tracking-wider text-[1rem] uppercase">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
