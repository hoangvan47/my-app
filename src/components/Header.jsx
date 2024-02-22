import React from "react";
import Link from "next/link";
const Header = () => {
  const navbar = [
    {
      id: 1,
      title: "home",
      href: "/",
      isActive: true,
    },
    {
      id: 2,
      title: "Courses",
      href: "/courses",
      isActive: false,
    },
    {
      id: 3,
      title: "Pricing",
      href: "/pricing",
      isActive: false,
    },
    {
      id: 4,
      title: "Reviews",
      href: "/reviews",
      isActive: false,
    },
  ];
  return (
    <div className="w-[1440px] bg-[#FFFCF4] ml-auto mr-auto ">
      <div className="w-[1170px] ml-auto mr-auto pt-11 pb-16 ">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          <img src="img/logo.svg" alt="Lesson" />

          <div className="ml-auto flex items-center gap-10">
            <Link
              href="/"
              className={`font-semibold text-base leading-7 decoration-[#171100]`}
            >
              Home
            </Link>
          </div>
          <div>
            <button>
              <Link
                href="/signup"
                className="ml-[70px] w-36 px-[41px] py-[11px] font-semibold bg-black text-white rounded-3xl leading-7"
              >
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
