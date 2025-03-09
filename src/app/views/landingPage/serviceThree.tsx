"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import gsap from "gsap";

const LaptopThree = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const phone1Ref = useRef<THREE.Group | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); // ✅ Added cameraRef
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 4);
        cameraRef.current = camera; // ✅ Assigned cameraRef here

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        rendererRef.current = renderer;

        const mount = mountRef.current;
        if (mount) {
            mount.appendChild(renderer.domElement);
        }

        // Studio Lighting Setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const keyLight = new THREE.RectAreaLight(0xffffff, 10, 12, 12);
        keyLight.position.set(0, 5, 6);
        keyLight.lookAt(0, 0, 0);
        scene.add(keyLight);
        scene.add(new RectAreaLightHelper(keyLight));

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
        controls.target.set(0, 0, 0);
        controls.enabled = false;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;

        const gltfLoader = new GLTFLoader();
        gltfLoader.load("/models/laptop.glb", (gltf) => {
            phone1Ref.current = gltf.scene;
            phone1Ref.current.scale.set(0.5, 0.5, 0.5);
            phone1Ref.current.position.set(-7, 0, 0);
            phone1Ref.current.rotation.set(0, 2, 0);
            scene.add(phone1Ref.current);
        });

        controls.update();

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;
            setInView(scrollY >= 1.5 * vh && scrollY <= 2.7 * vh);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    useEffect(() => {
        if (phone1Ref.current) {
            if (inView) {
                gsap.to(phone1Ref.current.position, { x: -0.5, y: 0.1, z: -0.5, delay: 0.2, duration: 1, ease: "power2.out" });
                gsap.to(phone1Ref.current.rotation, { y: 0.3, delay: 0.2, duration: 1, ease: "power2.out" });
            } else {
                gsap.to(phone1Ref.current.position, { x: -7, y: 0, z: 0, duration: 1, ease: "power2.out" });
                gsap.to(phone1Ref.current.rotation, { y: 2, duration: 1, ease: "power2.out" });
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
                    onUpdate: () => cameraRef.current?.updateProjectionMatrix(),
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

export default LaptopThree;