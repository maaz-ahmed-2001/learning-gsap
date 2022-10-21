import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin, PixiPlugin, ScrollTrigger } from "gsap/all";
import "./style.css";
import StaggeredText from "../../components/StaggeredText";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger);

const Home = () => {

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.to(
      ".grid-item", {
        duration:1,
        opacity:1,
        scale:1,
        stagger:{
          each:0.3,
          duration:0.5,
          from:"start",
        },
        scrollTrigger:{
          toggleActions:"play none none none",
          start:"300px 300px",
          scrub:true
        },
      }
    )
  }, []);

  return (
    <div className="container">
      <StaggeredText text={"maaz ahmed"} />
      {/* <div className="grid">
        {[...Array(12)].map((item,i) => (
          <div key={i} className="grid-item"></div>
        ))}
      </div> */}
      <div className="box">

      </div>
      
    </div>
  );
};

export default Home;
