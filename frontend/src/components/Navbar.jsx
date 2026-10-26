import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "EXPERIENCE", id: "qualification" },
    { name: "PROJECTS", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigation click
  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        flex
        justify-center
        text-white
        transition-all
        duration-300
        ${scrolled ? "pt-0" : "pt-3 sm:pt-4 lg:pt-6 px-4"}
      `}
    >
      <div
        className={`
          w-[100%]
          sm:w-[92%]
          lg:w-[100%]
          max-w-7xl

          bg-[#171c27]

          flex
          items-center
          justify-between

          min-h-[68px]
          sm:min-h-[76px]
          lg:h-20

          transition-all
          duration-300

          ${
            scrolled
              ? "rounded-none w-full max-w-none"
              : "rounded-md"
          }
        `}
      >
        {/* ================= LOGO ================= */}
        <div className="flex items-center min-w-0">
          <div
            className={`
              bg-[#0da7f3]

              h-[68px]
              w-[68px]

              sm:h-[76px]
              sm:w-[76px]

              lg:h-20
              lg:w-20

              flex
              items-center
              justify-center
              shrink-0

              ${
                scrolled
                  ? ""
                  : "rounded-tl-md rounded-bl-md"
              }
            `}
          >
            <img
              src={logo}
              alt="Subash Logo"
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                lg:w-12
                lg:h-12
                object-contain
              "
            />
          </div>

          <h1
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-bold
              px-3
              sm:px-4
              lg:px-5
              tracking-wide
              truncate
            "
          >
            SUBASH
          </h1>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-6
            xl:gap-12
            uppercase
            text-sm
            font-semibold
            tracking-wider
          "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative
                py-2
                whitespace-nowrap
                transition-all
                duration-300

                ${
                  activeSection === item.id
                    ? "text-[#0da7f3]"
                    : "text-white"
                }

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:bg-[#0da7f3]
                after:transition-all
                after:duration-300

                ${
                  activeSection === item.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }

                hover:text-[#0da7f3]
              `}
            >
              {item.name}
            </button>
          ))}

          {/* Hire Me */}
          <a
            href="tel:+918072854180"
            className="
              bg-[#0da7f3]
              text-black

              px-5
              xl:px-7

              py-3
              xl:py-4

              rounded-3xl
              font-bold

              flex
              items-center
              gap-2

              whitespace-nowrap

              hover:scale-105
              transition-transform
              duration-300

              mr-3
              xl:mr-6
            "
          >
            Hire Me

            <BriefcaseBusiness
              size={20}
              strokeWidth={2.5}
            />
          </a>
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden

            mr-4
            sm:mr-5

            w-11
            h-11

            flex
            items-center
            justify-center

            rounded-md

            bg-[#0da7f3]
            text-black

            transition-all
            duration-300

            hover:scale-105
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={26} strokeWidth={2.5} />
          ) : (
            <Menu size={26} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          absolute

          top-[calc(100%+8px)]

          left-1/2
          -translate-x-1/2

          w-[94%]
          sm:w-[92%]

          bg-[#171c27]

          rounded-md

          shadow-2xl

          overflow-hidden

          lg:hidden

          transition-all
          duration-300

          ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible"
          }
        `}
      >
        <nav className="flex flex-col py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full
                text-left

                px-6
                py-4

                text-sm
                font-semibold
                tracking-wider

                transition-all
                duration-200

                ${
                  activeSection === item.id
                    ? "text-[#0da7f3] bg-[#202633]"
                    : "text-white hover:text-[#0da7f3] hover:bg-[#202633]"
                }
              `}
            >
              {item.name}
            </button>
          ))}

          {/* Mobile Hire Me */}
          <a
            href="tel:+918072854180"
            className="
              mx-5
              mt-3
              mb-2

              bg-[#0da7f3]
              text-black

              px-6
              py-4

              rounded-3xl

              font-bold

              flex
              items-center
              justify-center
              gap-3

              hover:scale-[1.02]

              transition-transform
              duration-300
            "
          >
            Hire Me

            <BriefcaseBusiness
              size={20}
              strokeWidth={2.5}
            />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;