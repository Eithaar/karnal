import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Sphere = ({ mode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMountRef = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      1, // Aspect ratio is 1 because the width and height are the same
      0.1,
      1000
    );
    camera.position.z = 6; // Closer to the dots

    // Renderer setup with anti-aliasing and transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300); // Fixed size of 400px by 400px
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMountRef.appendChild(renderer.domElement);

    // Create geometry and material for dots
    const radius = 3;
    const numPoints = 8000;
    const phiStep = Math.PI * (3 - Math.sqrt(5));

    const positions = new Float32Array(numPoints * 3); // x, y, z for each point

    for (let i = 0; i < numPoints; i++) {
      const theta = phiStep * i;
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      positions[i * 3] = x * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = z * radius;
    }

    const dotsGeometry = new THREE.BufferGeometry();
    dotsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Set dot color based on the mode
    const dotColor = mode === 'dark' ? 0x777777 : 0x333333; 
    const dotSize = window.innerWidth <= 426 ? 0.02 : 0.01; // Increase size if screen width <= 426px


    const dotsMaterial = new THREE.PointsMaterial({
      color: dotColor,
      size: dotSize, 
    });

    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dots);

    // Spotlight
    const spotlight = new THREE.SpotLight(0xffffff, 2); // Increased intensity
    spotlight.position.set(10, 10, 10); // Adjust position for better lighting
    spotlight.angle = Math.PI / 4; // Wider angle for broader coverage
    spotlight.penumbra = 0.3; // Soft edge of the spotlight
    spotlight.decay = 2;
    spotlight.distance = 50;
    spotlight.castShadow = true;
    spotlight.shadow.mapSize.width = 2048;
    spotlight.shadow.mapSize.height = 2048;
    spotlight.shadow.camera.near = 1;
    spotlight.shadow.camera.far = 50;

    scene.add(spotlight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Softer ambient light
    scene.add(ambientLight);

    // Rotate the dots
    dots.rotation.set(Math.PI / 4, Math.PI / 4, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = performance.now() * 0.001;
      const waveHeight = 0.002;


      const positions = dots.geometry.attributes.position.array;

      for (let i = 0; i < numPoints; i++) {
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        positions[i * 3 + 1] += Math.sin(time * 2 + x * 5) * waveHeight;
        positions[i * 3] += Math.sin(time * 3 + z * 5) * waveHeight;
      }

      dots.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      currentMountRef.removeChild(renderer.domElement);
    };
  }, [mode]); // Re-run effect when mode changes

  return <div ref={mountRef} style={{ width: "300px", height: "300px" }} />;
};

export default Sphere;
