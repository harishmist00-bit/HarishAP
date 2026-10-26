import React from "react";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="py-5 lg:py-12 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex justify-center items-center min-h-[500px] hidden lg:flex">

            {/* Orange Circle */}
            <div
  className="
    absolute
    w-[300px]
    h-[400px]
    sm:w-[350px]
    sm:h-[400px]
    lg:w-[400px]
    lg:h-[450px]
    bg-[#0e5fe1]
    rounded-t-full
    bottom-[1px]
    left-1/2
    -translate-x-1/2
  "
></div>

            {/* Person Image */}
            <img
              src={about}
              alt="Subash AP - Android Developer"
              className="
                relative
                z-10
                w-[290px]
                sm:w-[340px]
                lg:w-[400px]
                object-contain
                mt-[-10px]
              "
            />

            {/* Completed Projects Card */}
            <div
              className="
                absolute
                z-20
                left-[5%]
                bottom-[55px]
                bg-white
                rounded-xl
                shadow-[0_10px_35px_rgba(0,0,0,0.12)]
                px-5
                py-4
                flex
                items-center
                gap-4
              "
            >
              <div className="text-3xl font-bold text-[#0da7f3]">
                5+
              </div>

              <div className="text-sm leading-5 text-gray-600">
                Completed
                <br />
                Projects
              </div>
            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div>

            {/* Small Heading */}
            <p
              className="
                text-[#0da7f3]
                uppercase
                tracking-[5px]
                font-semibold
                text-center
                lg:text-start
                text-sm
                mb-3
              "
            >
              About Me
            </p>


            {/* Main Heading */}
            <h2
              className="
                text-3xl
                sm:text-5xl
                lg:text-[52px]
                leading-tight
                text-center
                lg:text-start
                font-bold
                text-gray-900
              "
            >
              Who is{" "}
              <span className="text-[#0da7f3]">
                Subash AP?
              </span>
            </h2>

            <div className="relative flex justify-center items-center min-h-[430px] flex lg:hidden">

            {/* Orange Circle */}
            <div
  className="
    absolute
    w-[300px]
    h-[320px]
    sm:w-[350px]
    sm:h-[400px]
    lg:w-[400px]
    lg:h-[450px]
    bg-[#0e5fe1]
    rounded-t-full
    bottom-[21px]
    left-1/2
    -translate-x-1/2
  "
></div>

            {/* Person Image */}
            <img
              src={about}
              alt="Subash AP - Android Developer"
              className="
                relative
                z-10
                w-[400px]
                sm:w-[340px]
                lg:w-[400px]
                object-contain
                mt-[-10px]
              "
            />

            {/* Completed Projects Card */}
            <div
              className="
                absolute
                z-20
                left-[4%]
                bottom-[40px]
                bg-white
                rounded-xl
                shadow-[0_10px_35px_rgba(0,0,0,0.12)]
                px-5
                py-4
                flex
                items-center
                gap-4
              "
            >
              <div className="text-3xl font-bold text-[#0da7f3]">
                5+
              </div>

              <div className="text-sm leading-5 text-gray-600">
                Completed
                <br />
                Projects
              </div>
            </div>

          </div>


            {/* Description */}
            <p
              className="
                mt-0
                lg:mt-6
                text-gray-800
                text-sm
              sm:text-base
              text-justify
                leading-8
                max-w-xl
                leading-7
              lg:leading-8
              "
            >
              I’m an Android Developer with 1 year of experience
              building reliable and user friendly mobile applications
              using Java and Android Studio. I enjoy turning ideas into
              clean, functional, and engaging mobile experiences.
            </p>


            {/* ================= STATS ================= */}
            <div
              className="
                grid
                grid-cols-3
                gap-6
                sm:gap-10
                mt-4
                lg:mt-10
              "
            >

              {/* Projects */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  5+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  Projects Done
                </p>
              </div>


              {/* Experience */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  1+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  Years of Experience
                </p>
              </div>


              {/* Technologies */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  10+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  Technologies
                </p>
              </div>

            </div>


            {/* Divider */}
            <div className="border-t border-gray-200 my-5 lg:my-9"></div>


            {/* ================= BOTTOM ================= */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-6
              "
            >

              {/* Name */}
              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-center
                    lg:text-start
                    italic
                    text-[#0da7f3]
                  "
                >
                  Subash AP
                </h3>

                <p className="mt-1 text-gray-500 text-center lg:text-start">
                  Android Developer
                </p>
              </div>


              {/* Social Icons */}
              <div className="flex gap-3 justify-center lg:justify-start">

                {/* WhatsApp */}
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-blue-100
                    text-[#0da7f3]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaWhatsapp size={17} />
                </a>


                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-blue-100
                    text-[#0da7f3]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaInstagram size={17} />
                </a>


                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-blue-100
                    text-[#0da7f3]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaLinkedinIn size={17} />
                </a>


                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-blue-100
                    text-[#0da7f3]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaGithub size={17} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;