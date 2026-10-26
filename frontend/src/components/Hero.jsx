import { Download } from "lucide-react";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import cv from "../assets/subash-resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        w-full
        min-h-screen
        overflow-hidden
        flex
        items-center
        pt-24
        sm:pt-28
        lg:pt-20
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto

          px-5
          sm:px-8
          lg:px-10
          xl:px-6

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-8
          xl:gap-12

          items-center

          py-3
          sm:py-10
          lg:py-12
          lg:pb-0
        "
      >
        {/* ================= LEFT ================= */}
        <div className="w-full min-w-0">

          {/* Greeting */}
          <h3
            className="
              text-xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl

              font-bold
              leading-tight
              text-black
              text-center lg:text-left
            "
          >
            Hi, I'm Subash!
          </h3>

          {/* Main Heading */}
          <h1
            className="
              mt-5
              sm:mt-6
              lg:mt-7

              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-6xl

              font-black
              leading-none
              text-center lg:text-left

              text-black

              tracking-tight

              whitespace-nowrap
            "
          >
            ANDROID{" "}
            <span className="text-[#0da7f3]">
              DEVELOPER
            </span>
          </h1>

          <div
          className="
            w-full

            flex
            justify-center
            lg:justify-end
            block lg:hidden

            mt-4
            sm:mt-5
            lg:mt-0

            min-w-0
          "
        >
          <div
            className="
              relative

              w-[320px]
              h-[320px]

              sm:w-[340px]
              sm:h-[380px]

              md:w-[400px]
              md:h-[450px]

              lg:w-[440px]
              lg:h-[500px]

              xl:w-[600px]
              xl:h-[560px]

              max-w-full
            "
          >
            <img
              src={profile}
              alt="Subash - Android Developer"
              className="
                w-full
                h-full

                object-contain
                object-center

                block
              "
            />
          </div>
        </div>

          {/* Description */}
          <p
            className="
              max-w-2xl

              text-sm
              sm:text-base

              text-gray-800
              text-justify

              mt-3
              lg:mt-8

              leading-7
              lg:leading-8
            "
          >
            I’m an Android Developer with 1 year of experience
            building user friendly mobile applications using Java
            and Android Studio, focused on clean code, performance,
            and great user experiences.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-5
              sm:gap-7

              mt-4
              lg:mt-10
            "
          >
            {/* Download CV */}
            <a
              href={cv}
              onClick={() => {
                const link = document.createElement("a");
                link.href = cv;
                link.download = "Subash-CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#0da7f3]
                text-white

                px-6
                sm:px-8

                py-3
                sm:py-4

                rounded

                font-bold

                flex
                items-center
                gap-3

                text-sm
                sm:text-base

                hover:scale-105
                transition-transform
                duration-300
              "
            >
              Download CV

              <Download size={18} />
            </a>

            {/* Android */}
            <div
              className="
                w-14
                h-14
                sm:w-16
                sm:h-16

                rounded-full
                bg-[#0da7f3]

                flex
                items-center
                justify-center

                shrink-0

                hover:scale-105
                transition-transform
                duration-300
              "
            >
              <FontAwesomeIcon
                icon={faAndroid}
                className="
                  text-white
                  text-2xl
                  sm:text-3xl
                "
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            w-full

            flex
            justify-center
            lg:justify-end
            hidden lg:flex

            mt-4
            sm:mt-5
            lg:mt-0

            min-w-0
          "
        >
          <div
            className="
              relative

              w-[280px]
              h-[320px]

              sm:w-[340px]
              sm:h-[380px]

              md:w-[400px]
              md:h-[450px]

              lg:w-[440px]
              lg:h-[500px]

              xl:w-[500px]
              xl:h-[560px]

              max-w-full
            "
          >
            <img
              src={profile}
              alt="Subash - Android Developer"
              className="
                w-full
                h-full

                object-contain
                object-center

                block
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;