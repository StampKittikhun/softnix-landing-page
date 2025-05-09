import React from "react";
import logo1 from "../assets/images/customers/logo1.png";
import logo2 from "../assets/images/customers/logo2.png";
import logo3 from "../assets/images/customers/logo3.png";
import logo4 from "../assets/images/customers/logo4.png";
import logo5 from "../assets/images/customers/logo5.png";
import logo6 from "../assets/images/customers/logo6.png";
import logo7 from "../assets/images/customers/logo7.png";
import logo8 from "../assets/images/customers/logo8.png";
import logo9 from "../assets/images/customers/logo9.png";
import logo10 from "../assets/images/customers/logo10.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10
];

export default function CustomerLogos() {
  return (
    <section id="CustomerLogo" className="py-20 px-6 bg-sky-300/10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-sky-300 via-sky-500 to-sky-900 bg-clip-text text-transparent  py-2 px-4">
          ลูกค้าชั้นนำที่เลือกใช้
        </h2>
        <br />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Customer ${index + 1}`}
              className="h-20 md:h-20 max-w-[120px] object-contain  hover:grayscale-0 hover:scale-110 hover:brightness-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
