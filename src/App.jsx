import React from "react";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhySoftnix from "./components/WhySoftnix";
import VideoSection from "./components/VideoSection";
import CustomerLogos from "./components/CustomerLogo";
import RegisterDemo from "./components/RegisterDemo";
import bgImage from "./assets/images/bg-hero.png";

function App() {
  return (
    <div>
      <div
        role="presentation"
        className="absolute inset-0 -z-10 min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "#f0f9ff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(10px)",
          transform: "scale(1.1)", // ป้องกันขอบเบลอไม่พอ
          width: "100%",
          height: "100%",
        }}
      />
      {/* เนื้อหา Landing Page */}
      <div className="relative z-10">
        <MyNavbar />
        <Hero />
        <Features />
        <WhySoftnix />
        <VideoSection />
        <CustomerLogos />
        <RegisterDemo />
      </div>
    </div>
  );
}

export default App;
