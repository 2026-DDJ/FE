import { useEffect, useRef } from "react";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import skeletonModel from "../assets/models/skeleton.glb";

const SkeletonViewer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // ==============================
    // 1. Scene
    // ==============================

    const scene = new THREE.Scene();

    // 배경 투명
    scene.background = null;

    // ==============================
    // 2. Camera
    // ==============================

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    // 기존 값 유지
    camera.position.set(60, 0, 0);

    // ==============================
    // 3. Renderer
    // ==============================

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1)
    );

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // ==============================
    // 4. Lighting
    // ==============================

    // 기존 흰색 AmbientLight보다 훨씬 약하게
    // 전체적으로 아주 은은한 핑크빛만 줌
    const ambientLight = new THREE.AmbientLight(
      0xffdbed,
      0.65
    );

    scene.add(ambientLight);

    // 앞쪽 조명
    const frontLight = new THREE.DirectionalLight(
      0xffc4df,
      1.1
    );

    frontLight.position.set(0, 2, 5);

    scene.add(frontLight);

    // 뒤쪽 조명
    // 360도 회전했을 때 뒷면이 까매지는 것 방지
    const backLight = new THREE.DirectionalLight(
      0xc58ca7,
      0.75
    );

    backLight.position.set(0, 2, -5);

    scene.add(backLight);

    // 왼쪽 조명
    const leftLight = new THREE.DirectionalLight(
      0xb77f9b,
      0.35
    );

    leftLight.position.set(-5, 1, 0);

    scene.add(leftLight);

    // 오른쪽 조명
    const rightLight = new THREE.DirectionalLight(
      0xb77f9b,
      0.35
    );

    rightLight.position.set(5, 1, 0);

    scene.add(rightLight);

    // ==============================
    // 5. Skeleton Group
    // ==============================

    const skeletonGroup = new THREE.Group();

    scene.add(skeletonGroup);

    // ==============================
    // 6. GLB Loader
    // ==============================

    const loader = new GLTFLoader();

    loader.load(
      skeletonModel,

      (gltf) => {
        const skeleton = gltf.scene;

        // 기존 크기 유지
        skeleton.scale.set(2.2, 2.2, 2.2);

        // 기존 위치 유지
        skeleton.position.set(0, 0.5, 0);

        // ==============================
        // 기본 X-ray Material
        // ==============================

        skeleton.traverse((child) => {
          if (!child.isMesh) return;

          child.material =
            new THREE.MeshPhysicalMaterial({
              // #FFDBED를 그대로 쓰면 너무 밝아서
              // 한 단계 어두운 핑크 사용
              color: new THREE.Color("#fff"),

              // X-ray 반투명
              transparent: true,

              opacity: 0.58,

              // 앞면 + 뒷면 모두 렌더링
              side: THREE.DoubleSide,

              // 자체 발광은 매우 약하게
              emissive: new THREE.Color("#706269"),

              emissiveIntensity: 0.05,

              // 뼈 표면 명암 유지
              roughness: 0.65,

              metalness: 0,

              // 뒤쪽 뼈도 어느 정도 보이게
              depthWrite: false,
            });

          child.material.needsUpdate = true;
        });

        skeletonGroup.add(skeleton);

        // ==============================
        // Fresnel X-ray Glow
        // ==============================
        //
        // 기본 Skeleton을 하나 복제해서
        // 바깥쪽 윤곽에만 핑크빛이 나타나는
        // Fresnel Shader를 덮어씌움
        //

        const glowSkeleton = skeleton.clone(true);

        // 같은 위치/크기는 skeleton 자체에 이미
        // 적용되어 있으므로 clone이 그대로 가져옴

        glowSkeleton.traverse((child) => {
          if (!child.isMesh) return;

          child.material = new THREE.ShaderMaterial({
            uniforms: {
              glowColor: {
                value: new THREE.Color("#fae9f1"),
              },

              // 가장자리 빛의 세기
              intensity: {
                value: 0.3,
              },

              // 값이 높을수록 가장자리에만 집중됨
              power: {
                value: 2.4,
              },
            },

            vertexShader: `
              varying vec3 vNormal;
              varying vec3 vViewDirection;

              void main() {
                vec4 worldPosition =
                  modelMatrix * vec4(position, 1.0);

                vNormal = normalize(
                  mat3(modelMatrix) * normal
                );

                vViewDirection = normalize(
                  cameraPosition - worldPosition.xyz
                );

                gl_Position =
                  projectionMatrix *
                  viewMatrix *
                  worldPosition;
              }
            `,

            fragmentShader: `
              uniform vec3 glowColor;
              uniform float intensity;
              uniform float power;

              varying vec3 vNormal;
              varying vec3 vViewDirection;

              void main() {
                float fresnel =
                  1.0 -
                  abs(
                    dot(
                      normalize(vNormal),
                      normalize(vViewDirection)
                    )
                  );

                fresnel = pow(
                  fresnel,
                  power
                );

                float alpha =
                  fresnel * intensity;

                gl_FragColor = vec4(
                  glowColor,
                  alpha
                );
              }
            `,

            transparent: true,

            // 기본 모델 위에 빛을 더함
            blending: THREE.AdditiveBlending,

            // 뒷면도 Glow 계산
            side: THREE.DoubleSide,

            // 깊이 버퍼에 기록하지 않음
            depthWrite: false,
          });
        });

        skeletonGroup.add(glowSkeleton);
      },

      undefined,

      (error) => {
        console.error(
          "Skeleton model load error:",
          error
        );
      }
    );

    // ==============================
    // 7. Mouse Control
    // ==============================

    const controls = new OrbitControls(
      camera,
      renderer.domElement
    );

    // 이동 금지
    controls.enablePan = false;

    // 확대/축소 금지
    controls.enableZoom = false;

    // ==============================
    // 가로 방향으로만 회전
    // ==============================

    controls.minPolarAngle =
      Math.PI / 2;

    controls.maxPolarAngle =
      Math.PI / 2;

    // ==============================
    // 부드러운 움직임
    // ==============================

    controls.enableDamping = true;

    controls.dampingFactor = 0.05;

    // ==============================
    // 자동 회전
    // ==============================

    controls.autoRotate = true;

    controls.autoRotateSpeed = 3.5;

    // ==============================
    // 8. Animation
    // ==============================

    let animationId;

    const animate = () => {
      animationId =
        requestAnimationFrame(animate);

      controls.update();

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // ==============================
    // 9. Resize
    // ==============================

    const handleResize = () => {
      if (!container) return;

      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // ==============================
    // 10. Cleanup
    // ==============================

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(
        animationId
      );

      controls.dispose();

      scene.traverse((object) => {
        if (!object.isMesh) return;

        object.geometry?.dispose();

        if (
          Array.isArray(
            object.material
          )
        ) {
          object.material.forEach(
            (material) => {
              material.dispose();
            }
          );
        } else {
          object.material?.dispose();
        }
      });

      renderer.dispose();

      if (
        renderer.domElement &&
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        cursor: "grab",
      }}
    />
  );
};

export default SkeletonViewer;