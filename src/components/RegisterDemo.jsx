import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function RegisterDemoSection() {
    const [date, setDate] = useState(new Date());
  
    return (
      <section id="RegisterDemo" className=" py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* กล่องลงทะเบียน */}
          <div className="bg-sky-300/10  rounded-xl p-8 shadow-md flex flex-col">
            <h2 className="py-1 text-center text-2xl :text-2xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900 bg-clip-text text-transparent">
              ทดลองระบบที่องค์กรชั้นนำเลือกใช้
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1 text-sky-900">ชื่อ - นามสกุล</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block font-medium mb-1 text-sky-900">อีเมล</label>
                <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block font-medium mb-1 text-sky-900">เบอร์โทร</label>
                <input type="tel" className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <button type="submit" className=" w-full md:w-auto bg-[#0093F5] text-white font-semibold px-10 py-3 rounded-full hover:bg-sky-600 mx-auto block">
                ส่งข้อมูล
              </button>
            </form>
          </div>
  
          {/* กล่องปฏิทิน */}
          <div className="bg-sky-300/10 rounded-xl p-8 shadow-md flex flex-col items-center">
            <h2 className="py-1 text-center text-xl md:text-2xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900 bg-clip-text text-transparent">
              นัด Demo ระบบกับผู้เชี่ยวชาญ
            </h2>
            <Calendar onChange={setDate} value={date} className="rounded-lg mb-6 shadow" />
            <button className="w-full md:w-auto bg-[#0093F5] text-white font-semibold px-10 py-3 rounded-full hover:bg-sky-600">
              นัดหมาย
            </button>
          </div>
  
        </div>
      </section>
    );
  }