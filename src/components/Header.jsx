import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-[1440px] bg-[#FFFCF4] ml-auto mr-auto ">
      <div className="w-[1170px] ml-auto mr-auto pt-11 pb-16 ">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          <img src="img/logo.svg" alt="Lesson" />

          <div className="ml-auto flex items-center">
            <Link
              href="/"
              className="font-semibold text-base leading-7 decoration-[#171100]"
            >
              Home
            </Link>
            <div className="font-normal text-base leading-7 ml-[42px]">
              Courses
            </div>
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
