import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="/">
              <i className="bx bxl-github text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-medium text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-whatsapp text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
