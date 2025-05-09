import React from "react";

export default function VideoSection() {
  return (
    <section id="VideoSection" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* วิดีโอ 1 */}
          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg transition hover:shadow-xl duration-300">
            <h2 className="text-center text-xl md:text-2xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-sky-900 to-sky-900 bg-clip-text text-transparent">
              รู้จัก Softnix Logger ใน 90 วินาที
            </h2>
            <br />
            <video
              className="w-full rounded-lg border border-sky-300/20"
              controls
            >
              <source src="/Videos/วิเคราะห์ข้อมูลสถิตการจองโรงแรม.mp4" type="video/mp4" />

            </video>
          </div>

          {/* วิดีโอ 2 */}
          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg transition hover:shadow-xl duration-300">
            <h2 className="text-center text-2xl md:text-2xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-sky-900 to-sky-900 bg-clip-text text-transparent">
              ทดลองใช้งานฟรี 14 วัน - Onsite POC
            </h2>
            <br />
            <video
              className="w-full rounded-lg border border-sky-100"
              controls
            >
              <source src="/Videos/สร้าง Addmission note ของโรงพยาบาล.mp4" type="video/mp4" />
              เบราว์เซอร์ของคุณไม่รองรับ video tag
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}
