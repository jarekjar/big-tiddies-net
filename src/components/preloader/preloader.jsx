import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  //preloader function that changes the opacity on a timer  
  const preloader = () => {
    let preload = document.querySelector(".preloader");
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 3000);
  };

  //use effect with no dependencies is effective a component did mount
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div className="preloader">
      <div className="spinner_wrap">
        <div className="spinner" />
      </div>
    </div>
  );
};

export default Preloader;
