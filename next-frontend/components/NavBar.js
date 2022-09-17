import React from "react";
import Link from "next/link";
import Head from "next/head";

// #4a389c

const NavBar = () => {
  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute bg-[#4a389c]">
        <div className="container flex items-center justify-between">
          <div className="mx-12">
            <a href="/">
              <img
                src="/assets//img/logo.svg"
                className="w-24 lg:w-48"
                alt="logo image"
              />
            </a>
          </div>
          {/* ************* Nav bar *************** */}
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                {/* Directed to about */}
                <a href="#about">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#services">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#clients">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Clients
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#work">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Work
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#statistics">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Statistics
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href={"/blogs"}>
                  <a>
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Blog
                    </span>
                  </a>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#contact">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
