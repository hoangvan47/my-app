import React from "react";
import Link from "next/link";
const Header = () => {
  const navbar = [
    {
      id: 1,
      title: "home",
      href: "/",
      isActive: false,
    },
    {
      id: 2,
      title: "courses",
      href: "/courses",
      isActive: true,
    },
    {
      id: 3,
      title: "pricing",
      href: "/pricing",
      isActive: false,
    },
    {
      id: 4,
      title: "reviews",
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
            {navbar.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className={`font-semibold text-base leading-7 ${
                  item.isActive ? `text-[#171100]` : `text-[#ffc146]`
                } capitalize`}
              >
                {item.title}
              </Link>
            ))}
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
