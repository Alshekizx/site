"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

interface LaptopModelProps {
  modelPath: File | string; // File or string type for model path
  scale?: number;
}

const BlogModel = ({ modelPath, scale = 0.5 }: LaptopModelProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.RectAreaLight(0xffffff, 10, 12, 12);
    keyLight.position.set(0, 5, 6);
    keyLight.lookAt(0, 0, 0);
    scene.add(keyLight);

    // Development only: RectAreaLightHelper (remove in production)
    if (process.env.NODE_ENV === "development") {
      const rectHelper = new RectAreaLightHelper(keyLight);
      scene.add(rectHelper);
    }

    // OrbitControls Setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.7;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.target.set(0, 0, 0);
    controls.update();

    // Load GLTF Model
    const gltfLoader = new GLTFLoader();
    let modelUrl: string | null = null;

    if (modelPath instanceof File) {
      modelUrl = URL.createObjectURL(modelPath);
    } else {
      modelUrl = modelPath;
    }

    gltfLoader.load(
      modelUrl,
      (gltf) => {
        if (modelRef.current) {
          scene.remove(modelRef.current); // Remove old model before adding a new one
        }

        modelRef.current = gltf.scene;
        modelRef.current.scale.set(scale, scale, scale);
        modelRef.current.position.set(0, 0, 0);
        modelRef.current.rotation.set(0, 0.5, 0);
        scene.add(modelRef.current);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.dispose();
            if ((child as THREE.Mesh).material) {
              if (Array.isArray((child as THREE.Mesh).material)) {
                (child as THREE.Mesh).material.forEach((material) => material.dispose());
              } else {
                (child as THREE.Mesh).material.dispose();
              }
            }
          }
        });
        scene.remove(modelRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (modelPath instanceof File && modelUrl) {
        URL.revokeObjectURL(modelUrl);
      }

      if (mount && renderer) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [modelPath, scale]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default BlogModel;