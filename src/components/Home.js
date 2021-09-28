import MainSection from "./MainSection";
import Timeline from "./Timeline";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "../styles/backGroundAnimation.css";
import WhyIntelliHackSection from "./WhyIntelliHackSection";
import WhatTheySay from "./WhatTheySay";
import PraposalSubmission from "./PraposalSubmission";
import Sponsers from "./Sponsers";
import Price from "./Price";
import { useRef } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");

    const scene = new THREE.Scene();

    const geometry = new THREE.TorusGeometry(1, 0.2, 16, 100);
    const particleGeometry = new THREE.BufferGeometry();
    const particleCounts = 100;
    const posArray = new Float32Array(particleCounts * 3);
    for (let i = 0; i < particleCounts * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 0.005,
    });
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      //   transparent: true,
      // color: "blue",
    });
    material.color = new THREE.Color(0x919191);

    const sphere = new THREE.Points(geometry, material);
    const particleMesh = new THREE.Points(particleGeometry, particlesMaterial);
    scene.add(sphere, particleMesh);

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 3;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // renderer.setClearColor(new THREE.Color("#041C4C"), 1);

    document.addEventListener("mousemove", animateParticles);
    let mouseX = 0;
    let mouseY = 0;
    function animateParticles(event) {
      mouseY = event.clientY;
      mouseX = event.clientX;
    }

    const clock = new THREE.Clock();
    console.log(clock.getElapsedTime());
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      sphere.rotation.y = 0.5 * elapsedTime;
      particleMesh.rotation.y = -0.1 * elapsedTime;

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);

  // const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const scrollToDiv = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const mainSection = useRef();
  const whyintelliHack = useRef();
  const timeline = useRef();
  const praposalSubmission = useRef();
  const whatTheySay = useRef();
  const sponsers = useRef();
  const prices = useRef();

  const el2 = useRef();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <canvas class="webgl"></canvas>
        <MainSection
          reference={mainSection}
          mainSectionClick={() => scrollToDiv(mainSection)}
          whyintelliHackClick={() => scrollToDiv(whyintelliHack)}
          timelineClick={() => scrollToDiv(timeline)}
          praposalSubmissionClick={() => scrollToDiv(praposalSubmission)}
          whatTheySayClick={() => scrollToDiv(whatTheySay)}
          sponsersClick={() => scrollToDiv(sponsers)}
          pricesClick={() => scrollToDiv(prices)}
        />

        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className="registration-modal"></div>
          </Modal>
        </div>

        <WhyIntelliHackSection reference={whyintelliHack} />
        <Timeline reference={timeline} />

        <PraposalSubmission
          openPopUp={handleOpen}
          reference={praposalSubmission}
        />
        <Price reference={prices} />
        <Sponsers reference={sponsers} />
        <WhatTheySay reference={whatTheySay} />
      </div>
    </div>
  );
}

export default Home;
