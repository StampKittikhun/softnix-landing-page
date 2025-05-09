import React from "react";
import whyImage from "../assets/images/why-softnix.png";
import { HiCheckCircle } from "react-icons/hi";

const features = [
    "ช่วยลดเวลาในการวิเคราะห์เหตุการณ์ได้สูงสุดถึง 70%",
    "ลดภาระของทีม IT และ Cybersecurity",
    "พร้อมใช้งานตามมาตรฐาน พ.ร.บ.คอมพิวเตอร์ และ PDPA",
    "เหมาะสำหรับองค์กรที่ต้องการความแม่นยำและการแจ้งเตือนที่ทันเวลา",
  ];

  export default function WhySoftnix() {
    return (
      <section id="WhySoftnix" className="py-20 px-6 bg-sky-300/10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image Left */}
          <div className="w-full">
            <img src={whyImage} alt="Why Softnix Logger" className="w-full h-auto rounded-xl" />
          </div>
  
          {/* Text Right */}
          <div>
            <h2 className="text-4xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-sky-900 to-sky-900 bg-clip-text text-transparent">
              ทำไมต้อง Softnix Logger เวอร์ชันใหม่
            </h2>
            <br />
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sky-800 text-lg">
                  <HiCheckCircle className="text-sky-600 w-6 h-6 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }