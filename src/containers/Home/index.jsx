import React, { useEffect, useRef } from "react";
import { gsap, Power0, Power2, Power4 } from "gsap";
import { MotionPathPlugin, PixiPlugin, ScrollTrigger } from "gsap/all";
import "./style.css";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  const name = "Maaz Ahmed";
  let nameArray = name.split("");

  console.log(nameArray);
  // gsap.defaults({ ease: "none", duration: 2 });

  useEffect(() => {
    const tl = gsap.timeline();
    const el = ref.current;
    tl.to(".heading", {
      duration: 1,
      scale: 1,
      opacity: 1,
      // y: 100,
      // ease: "",
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
    <div className="container">
      <div className="box">
        <div className="line2"></div>
        <div className="inner-box">
          {nameArray.map((item, i) => (
            <h1
              key={i}
              style={item === " " ? { width: "20px" } : {}}
              className="heading"
              ref={ref}
            >
              {item === " " ? " " : item}
            </h1>
          ))}
        </div>
        <div className="line"></div>
      </div>
      {/* <div className="height blue">1</div>
      <div className="height green">2</div>
      <div className="height orange">3</div>
      <div className="height red">4</div> */}
      {/* <div className="height">
        <h1 className="title">Learning GSAP</h1>
      </div>
      <div className="height orange">
        <div>
          <h1 className="heading1" ref={ref}>
            Hello !
          </h1>
        </div>
        <button onClick={() => tl.pause()}>pause</button>
        <button onClick={() => tl.resume()}>resume</button>
        <button onClick={() => tl.reverse()}>reverse</button>
        <button onClick={() => tl.play()}>play</button>
        <h2 className="heading2"> Gsap is fun ...</h2>
      </div> */}
    </div>
  );
};

export default Home;
