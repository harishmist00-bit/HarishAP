import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="qualification"
      className="bg-[#FAFAFA] px-3 lg:px-4 py-2 lg:py-16 pb-8"
    >
      {/* Heading */}
      <div className="text-center px-6 lg:px-8">
        <h1 className="mb-3 text-2xl
                sm:text-3xl
                lg:text-[36px] font-semibold text-slate-900">
          My personal journey
        </h1>

        <p
          className={`mx-auto max-w-3xl pb-8 text-sm
              sm:text-base leading-relaxed text-gray-800 px-2 lg:px-8`}
          style={{
            animationDelay: "0.2s",
          }}
        >
          A journey from earning my BE in Computer Science and Engineering to building Android applications with Java, driven by continuous learning and a passion for mobile development.
        </p>
      </div>
      

      {/* Tabs */}
      <div className="mt-0 lg:mt-16 flex justify-center gap-8">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 text-[18px] font-medium transition ${
            activeTab === "education"
              ? "text-[#0da7f3]"
              : "text-slate-500"
          }`}
        >
          <FaGraduationCap size={20} />
          Education
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 text-[18px] font-medium transition ${
            activeTab === "experience"
              ? "text-[#0da7f3]"
              : "text-slate-500"
          }`}
        >
          <FaBriefcase size={20} />
          Experience
        </button>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-10 max-w-[620px]">

        {activeTab === "education" ? (
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-[235px] w-[1px] -translate-x-1/2 bg-gray-400" />

            {/* Education 1 */}
            <div className="relative grid min-h-[74px] grid-cols-2">

              <div className="pr-8 text-right">
                <h3 className="text-[16px] font-medium text-slate-900">
                  BE-CSE
                </h3>

                <p className="mt-1 text-[14px] text-slate-500">
                  Sri Eshwar College of Engineering,<br></br>Coimbatore
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[13px] text-slate-500">
                  <FiCalendar size={13} />
                  2025 – 2029
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />

              <div />
            </div>

            {/* Education 2 */}
            <div className="relative grid min-h-[74px] grid-cols-2">

              <div />

              <div className="pl-6 pt-1">
                <h3 className="text-[16px] font-medium text-slate-900 hidden lg:block">
                  Higher Secondary
                </h3>
                <h3 className="text-[16px] font-medium text-slate-900 block lg:hidden">
                  Higher Sec
                </h3>

                <p className="mt-1 text-[14px] text-slate-500">
                  Govt Model School,<br></br> Ramanthapuram
                </p>

                <div className="mt-3 flex items-center gap-1 text-[13px] text-slate-500">
                  <FiCalendar size={13} />
                  2023 – 2025
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />
            </div>

            {/* Education 3 */}
            <div className="relative grid min-h-[74px] grid-cols-2">

              <div className="pr-8 pt-1 text-right">
                <h3 className="text-[15px] font-medium text-slate-900">
                  SSLC
                </h3>

                <p className="mt-1 text-[14px] text-slate-500">
                  Govt High School,<br></br>Vaniyankulam
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[13px] text-slate-500">
                  <FiCalendar size={13} />
                  2021 – 2023
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />

              <div />
            </div>
          </div>
        ) : (
          /* Experience */
          <div className="relative">

            <div className="absolute left-1/2 top-0 h-[235px] w-[1px] -translate-x-1/2 bg-gray-400" />

            {/* Experience 1 */}
            <div className="relative grid min-h-[90px] grid-cols-2">

              <div className="pr-8 text-right">
                <h3 className="text-[15px] font-medium text-slate-900">
                  Java Developer
                </h3>

                <p className="mt-1 text-[14px] text-slate-500">
                  Mist Software Solutions Pvt Ltd, <br></br>Coimbatore
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[13px] text-slate-500">
                  <FiCalendar size={13} />
                  2026 – Present
                </div>
              </div>

              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />

              <div />
            </div>

            {/* Experience 2 */}
            <div className="relative grid min-h-[90px] grid-cols-2">

              <div />

              <div className="pl-8">
                <h3 className="text-[15px] font-medium text-slate-900">
                  Mobile App Developer
                </h3>

                <p className="mt-1 text-[14px] text-slate-500">
                  WebSpire Labs Pvt Ltd, <br></br> Coimbatore
                </p>

                <div className="mt-3 flex items-center gap-1 text-[13px] text-slate-500">
                  <FiCalendar size={13} />
                  2025 – 2026
                </div>
              </div>

              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;