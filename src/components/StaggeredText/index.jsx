import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const StaggeredText = ({text}) => {
  let textArray = text.toUpperCase().split("");

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".heading", {
      duration: 1,
      scale: 1,
      opacity: 1,
      stagger: 0.1,
    });
    tl.to(".line", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "bounce",
      stagger: 0.1,
    });
    tl.to(".line2", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "bounce",
      stagger: 0.1,
    });
  }, []);
  
  return (
    <div className="box">
      <div className="line2"></div>
      <h1 className="inner-box">
        {textArray.map((item, i) => (
          <span key={i} className="heading">
            {item === " " ? <>&nbsp;</> : item}
          </span>
        ))}
      </h1>
      <div className="line"></div>
    </div>
  );
};

export default StaggeredText;
