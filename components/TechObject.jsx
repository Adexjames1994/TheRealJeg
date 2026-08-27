"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TechObject() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(
      55,
      width / height,
      0.1,
      1000
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2.1, 2.1, 2.1);

    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const nodeGeometry = new THREE.SphereGeometry(0.075, 12, 12);

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6
    });

    const nodes = new THREE.Group();

    for (let i = 0; i < 10; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

      node.position.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );

      nodes.add(node);
    }

    cube.add(nodes);

    scene.add(new THREE.AmbientLight(0xffffff, 1));

    let animationFrame;

    function animate() {
      cube.rotation.x += 0.003;
      cube.rotation.y += 0.005;
      cube.position.y = Math.sin(Date.now() * 0.001) * 0.18;

      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    }

    function resize() {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="tech-object" aria-hidden="true" />;
}