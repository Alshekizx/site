"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const PhoneThree = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const phone1Ref = useRef<THREE.Group | null>(null);
    const phone2Ref = useRef<THREE.Group | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 4.7);
        
        cameraRef.current = camera;
        

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth movement
        controls.dampingFactor = 0.05; // Damping speed
        controls.rotateSpeed = 0.5; // Adjust rotation speed for better control
        controls.target.set(0, 0, 0); // Focus point for camera control
        controls.enabled = false;
        controls.update();
        

        const mount = mountRef.current;
        if (mount) {
            mount.appendChild(renderer.domElement);
        }

      // Studio Lighting Setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 4); // Slightly stronger ambient light
      scene.add(ambientLight);

      // Main Key Light - Front Center
      const keyLight = new THREE.RectAreaLight(0xffffff, 10, 12, 12);
      keyLight.position.set(0, 5, 6);
      keyLight.lookAt(0, 0, 0);
      scene.add(keyLight);
      scene.add(new RectAreaLightHelper(keyLight));

      // Additional Key Light - Slightly Left
      const keyLight2 = new THREE.RectAreaLight(0xffffff, 8, 12, 12);
      keyLight2.position.set(-3, 5, 6);
      keyLight2.lookAt(0, 0, 0);
      scene.add(keyLight2);
      scene.add(new RectAreaLightHelper(keyLight2));

      // Fill Light - Right Side
      const fillLight = new THREE.RectAreaLight(0xffffff, 5, 10, 10);
      fillLight.position.set(3, 4, 5);
      fillLight.lookAt(0, 0, 0);
      scene.add(fillLight);
      scene.add(new RectAreaLightHelper(fillLight));

      // Rim Light - Slightly Behind
      const rimLight = new THREE.DirectionalLight(0xffffff, 2);
      rimLight.position.set(2, 4, 3);
      rimLight.lookAt(0, 0, 0);
      rimLight.castShadow = true;
      scene.add(rimLight);

      // Spot Light from Above
      const spotLight = new THREE.SpotLight(0xffffff, 4);
      spotLight.position.set(0, 10, 5);
      spotLight.angle = Math.PI / 4;
      spotLight.penumbra = 0.3;
      spotLight.castShadow = true;
      spotLight.target.position.set(0, 0, 0);
      scene.add(spotLight);
      scene.add(spotLight.target);

        const fbxLoader = new FBXLoader();

        fbxLoader.load("/models/phone.fbx", (fbx) => {
            phone1Ref.current = fbx;
            phone1Ref.current.scale.set(0.01, 0.01, 0.01);
            phone1Ref.current.position.set(7, 0, 0);
            phone1Ref.current.rotation.set(0, 0, -0.9);
            scene.add(phone1Ref.current);
        });

        fbxLoader.load("/models/phone.fbx", (fbx) => {
            phone2Ref.current = fbx;
            phone2Ref.current.scale.set(0.01, 0.01, 0.01);
            phone2Ref.current.position.set(7, 0, 0);
            phone2Ref.current.rotation.set(0, -2, 0);
            scene.add(phone2Ref.current);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;
            setInView(scrollY >= 0.7 * vh && scrollY <= 1.4 * vh);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    // Animation Logic
    useEffect(() => {
        if (phone1Ref.current && phone2Ref.current) {
            if (inView) {
                gsap.to(phone1Ref.current.position, { x: -1, y: 0, z: -0.3, delay: 0.7, duration: 1, ease: "power2.out" });
                gsap.to(phone2Ref.current.position, { x: 0.5, y: 0, z: 0, delay: 0.3, duration: 1, ease: "power2.out" });
                gsap.to(phone1Ref.current.rotation, { z: 0.6, delay: 0.7, duration: 1, ease: "power2.out" });
                gsap.to(phone2Ref.current.rotation, { y: 0, delay: 0.3, duration: 1, ease: "power2.out" });
            } else {
                gsap.to(phone1Ref.current.position, { x: 7, y: 0, z: 0, duration: 1, ease: "power2.out" });
                gsap.to(phone2Ref.current.position, { x: 7, y: 0, z: 0, duration: 1, ease: "power2.out" });
                gsap.to(phone1Ref.current.rotation, { z: -0.6, duration: 1, ease: "power2.out" });
                gsap.to(phone2Ref.current.rotation, { y: -2, duration: 1, ease: "power2.out" });
            }
        }
    }, [inView]);

  // Mouse Movement Camera Control
useEffect(() => {
    const mount = mountRef.current;

    const handleMouseMove = (event: MouseEvent) => {
        if (cameraRef.current) {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            
            // Map mouseX to the desired camera position range (-0.7 to 0.7)
            const targetPositionX = Math.max(-0.7, Math.min(0.7, mouseX * 0.7));

            gsap.to(cameraRef.current.position, {
                x: targetPositionX,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = () => {
        if (cameraRef.current) {
            gsap.to(cameraRef.current.position, {
                x: 0, // Return to center when mouse leaves
                duration: 0.5,
                ease: "power2.out",
            });
        }
    };

    if (mount) {
        mount.addEventListener("mousemove", handleMouseMove);
        mount.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
        if (mount) {
            mount.removeEventListener("mousemove", handleMouseMove);
            mount.removeEventListener("mouseleave", handleMouseLeave);
        }
    };
}, []);

    return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default PhoneThree;