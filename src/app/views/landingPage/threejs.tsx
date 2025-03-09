"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);
    const defaultActionRef = useRef<THREE.AnimationAction | null>(null);
    const waveActionRef = useRef<THREE.AnimationAction | null>(null);
    const modelRef = useRef<THREE.Object3D | null>(null);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    useEffect(() => {
        // Scene, Camera, and Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        rendererRef.current = renderer;

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

         // Studio Lighting Setup
         const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Slightly stronger ambient light
         scene.add(ambientLight);
 
         // Main Key Light - Front Center
         const keyLight = new THREE.RectAreaLight(0xffffff, 4, 5, 5);
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


        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.minAzimuthAngle = -Math.PI * (145 / 360);
        controls.maxAzimuthAngle = Math.PI * (145 / 360);
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
    
        const gltfLoader = new GLTFLoader();
        gltfLoader.load("/models/17kManStand.glb", (gltf) => {
            const model = gltf.scene;
            model.position.set(2.3, -1.3, 0);
            model.scale.set(1, 1, 1);
            modelRef.current = model;
        
            model.traverse((node) => {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
        
                    if (node.material) {
                        node.material.metalness = 0.3; 

                    }
                }
            });
        
            scene.add(model);
        
            // Animation Handling
            if (gltf.animations.length > 0) {
                mixerRef.current = new THREE.AnimationMixer(model);
                gltf.animations.forEach((clip) => {
                    if (clip.name.toLowerCase() === "wave") {
                        waveActionRef.current = mixerRef.current.clipAction(clip);
                    } else {
                        defaultActionRef.current = mixerRef.current.clipAction(clip);
                    }
                });
        
                if (defaultActionRef.current) {
                    defaultActionRef.current.play();
                }
            }
        });

        // Load Logo and Floor Models (.fbx)
        const fbxLoader = new FBXLoader();
        fbxLoader.load("/models/17kLogo.fbx", (fbx) => {
            fbx.scale.set(0.05, 0.05, 0.05);
            fbx.position.set(-0.9, 0, -0.5);
            fbx.rotation.set(0, -0.2, 0);
            fbx.traverse((node) => {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
            scene.add(fbx);
        });

        fbxLoader.load("/models/floor.fbx", (fbx) => {
            fbx.scale.set(0.1, 0.1, 0.1);
            fbx.position.set(0, -1.9, 0);
            fbx.traverse((node) => {
                if (node instanceof THREE.Mesh) {
                    node.receiveShadow = true;
                }
            });
            scene.add(fbx);
        });

        // Camera Setup
        camera.position.set(0, 0, 4);
        controls.target.set(0, 0.5, 0);
        controls.update();

        // Animation Loop
        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            if (mixerRef.current) {
                mixerRef.current.update(delta);
            }
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Handle Click Event
        const handleClick = (event: MouseEvent) => {
            if (!modelRef.current || !mixerRef.current || !waveActionRef.current || !defaultActionRef.current) return;
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(modelRef.current, true);
            if (intersects.length > 0) {
                defaultActionRef.current.stop();
                waveActionRef.current.reset().play();
                setTimeout(() => {
                    waveActionRef.current.stop();
                    defaultActionRef.current.reset().play();
                }, 1000);
            }
        };
        window.addEventListener("click", handleClick);

        // Cleanup on Unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("click", handleClick);
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
            controls.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;