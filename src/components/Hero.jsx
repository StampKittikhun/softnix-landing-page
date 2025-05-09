import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../assets/images/Hero1.png";
import hero2 from "../assets/images/Hero2.png";

const images = [hero1, hero2];

export default function Hero() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    fade: false,
    arrows: true,
    dots: true, // แสดงจุดด้านล่าง
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <section id="Hero" className="bg-gradient-to-b from-sky-300/20 to-white backdrop-blur-md py-20 px-6 text-sky-900">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-300 via-sky-600 to-sky-900 bg-clip-text text-transparent">
            Softnix Logger ใหม่!
            <br />
            ขับเคลื่อนระบบจัดการ Log ด้วย AI อัจฉริยะ
          </h1>
          <p className="text-sky-900 text-2xl mb-8 leading-relaxed">
            พร้อมฟีเจอร์ล้ำสมัย ช่วยให้คุณตรวจสอบ
            <br />
            วิเคราะห์ และเข้าใจเหตุการณ์ในระบบได้แบบ
            <br />
            Real-time และแม่นยำ
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0093F5] text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700">
              ทดลองใช้ฟรี 14 วัน
            </button>
            <button className="border border-blue-600 text-[#0093F5] font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                />
              </svg>
              วิดีโอสาธิตระบบ
            </button>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative w-full h-full">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Softnix Slide ${idx + 1}`}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
