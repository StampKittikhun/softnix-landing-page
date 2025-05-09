import React from "react";
import Lottie from "lottie-react";
import ai from "../assets/lottie/ai.json";
import analyze from "../assets/lottie/analyz.json";
import centralizetion from "../assets/lottie/centralization.json";
import dashboard from "../assets/lottie/dashboard.json";
import graph from "../assets/lottie/graph.json";
import track from "../assets/lottie/track.json";

const FeaturesData = [
  {
   Animation:centralizetion,
    title: "Log Track (Real-time Monitoring)", 
    desc: "ตรวจสอบและติดตามเหตุการณ์สําคัญแบบเรียลไทม์ พร้อมย้อนดูเหตุการณ์ในรูปแบบกราฟิกได้ทุกเมื่อ พร้อมระบบแจ้งเตือนอัตโนมัติเมื่อเกิดสิ่งผิดปกติ",
    bg: "bg-sky-600",
  },
  {
    Animation:graph,
    title: "Log Track Dashboard",
    desc: "แดชบอร์ดรวมศูนย์ที่แสดงภาพรวมของเหตุการณ์ทั้งหมดในองค์กรช่วยให้คุณบริหารจัดการความสอดคล้องตามนโยบายและมาตรฐานต่างๆได้อย่างง่ายดาย",
    bg: "bg-indigo-600",
  },
  {
    Animation:track,
    title: "Data Visualization",
    desc: "แปลงข้อมูล Log ปริมาณมหาศาลให้กลางเป็นกราฟิกที่อ่านง่าย เข้าใจเร็ว ช่วยให้ทีมงานมองเห็น แนวโน้มและความเปลี่ยนแปลงได้ทันที",
    bg: "bg-emerald-600",
  },
  {
    Animation:dashboard,
    title: "Centraliza Dachboard",
    desc: "ศูนย์รวมข้อมูลและภาพเหตุการณ์สำคัญทั้งหมด เปลี่ยนจากข้อมูล Log ดิบให้กลายเป็น Insight ที่นำไปใช้ตัดสินใจได้จริง",
    bg: "bg-emerald-600",
  },
  {
    Animation:ai,
    title: "AI Summary",
    desc: "ปัญญาประดิษฐ์ช่วยสรุปเหตุการณ์สําคัญประจําวันที่เกิดขึ้นพร้อมคําแนะนําในการรับมือ ราวกับมีผู้เชี่ยวชาญคอยให้ค่าปรึกษา",
    bg: "bg-emerald-600",
  },
  {
    Animation:analyze,
    title: "AI Log Analyzer",
    desc: "วิเคราะห์ Log ที่ไม่มีโครงสร้าง (Unstructured) ด้วย AI พร้อมสรุปผลและจัดทํารายงานในรูปแบบมืออาชีพ",
    bg: "bg-emerald-600",
  },
];

export default function Features() {
    return (
        <section id="Features" className="py-20 px-6 bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            {/* หัวข้อ + ขีดด้านข้าง */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-1 w-12 md:w-24 bg-sky-600 rounded-full" />
              <p className="py-2 px-4 text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900 bg-clip-text text-transparent">
                ฟีเจอร์เด่นที่คุณต้องลอง
              </p>
              <div className="h-1 w-12 md:w-24 bg-sky-600 rounded-full" />
            </div>
    
            {/* กล่องฟีเจอร์ */}
            
            <div className="flex flex-col gap-8">
              {FeaturesData.map((feature, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-7 gap-x-6 p-6 hover:shadow-lg transition duration-300 bg-white  border-b border-gray-400"
                >
                  <div className="col-span-1 w-full h-full mx-auto mb-4">
                    <Lottie animationData={feature.Animation} loop={true} />
                  </div>
                  <h3 className="text-start col-span-2 text-xl font-semibold text-sky-700 mb-2">{feature.title}</h3>
                  <p className="text-start col-span-4 text-xl text-back-400 ">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }