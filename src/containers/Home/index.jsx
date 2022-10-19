import React, { useEffect, useRef } from "react";
import { gsap, Power0, Power2, Power4 } from "gsap";
import { MotionPathPlugin, PixiPlugin, ScrollTrigger } from "gsap/all";
import "./style.css";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  gsap.defaults({ ease: "none", duration: 2 });
  const tl = gsap.timeline();
  useEffect(() => {
    const el = ref.current;
    tl.from(".green", { xPercent: -100 })
      .from(".red", { xPercent: 100 })
      .from(".orange", { yPercent: -100 });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end:"+=4000",
      pinSpacing:false,
      scrub: true,
      markers:true,
      pin: true,
      anticipatePin: 1,
    });
    // gsap.to(el, {
    //   scrollTrigger: {
    //     trigger: ".heading1",
    //     start: "-100px center",
    //     end:"100px center",
    //     markers: true,
    //     toggleActions:"play resume none none",
    //     scrub:2
    //   },
    //   rotate:360 ,
    //   duration: 4,
    // });
  }, []);

  return (
    <div className="container">
      <div className="height blue">1</div>
      <div className="height green">2</div>
      <div className="height orange">3</div>
      <div className="height red">4</div>
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
