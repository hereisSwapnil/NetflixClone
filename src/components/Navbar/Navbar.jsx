import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  });
  return (
    <React.Fragment>
      <div
        className={`fixed top-0 h-auto ease-in transition-all duration-500 z-10 ${
          show ? "bg-black" : ""
        }`}
      >
        <div className="flex justify-between w-[100vw] flex-row px-10 pb-3 items-center">
          <img
            src="https://i.postimg.cc/RZqg1XMN/image-removebg-preview.png"
            alt=""
            className="w-20 h-fit cursor-pointer pt-3"
          />
          <img
            src="https://i.postimg.cc/3w77zFM3/image.png"
            alt=""
            className="w-10 h-fit cursor-pointer pt-3"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
