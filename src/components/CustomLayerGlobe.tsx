// @ts-nocheck

import { FC, useState, useEffect, useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import * as THREE from "three";
import BackgroundVideo from "components/BackgroundVideo";

import { renderToString } from "react-dom/server";
import Globe from "react-globe.gl";
import { Console } from "console";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
// const THREE = dynamic(() => import("three"), { ssr: false });

type T = any;
// Gen random data

const Thumbnail: FC<Type> = ({ d }) => {
  return (
    <StyledThumbnail>
      <BackgroundVideo />
    </StyledThumbnail>
  );
};

const GlobeComponent: FC<T> = () => {
  const globeEl = useRef();
  const [data, setData] = useState([]);
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/moon-landing-sites/moon_landings.json"
    )
      .then((r) => r.json())
      .then((projects) => {
        const a = projects.map((p) => ({
          lat: p.lat,
          lng: p.lng,
          alt: 0.1,
          radius: Math.random() * 8,
          color: ["red", "white", "blue", "green"][
            Math.round(Math.random() * 3)
          ],
        }));
        const b = a.map((el) => ({ outline: true, ...el }));
        setData([...a, ...b]);
      });
  }, []);

  const material = new THREE.MeshPhongMaterial({
    map: new THREE.Texture("/original.jpg"),
    side: THREE.DoubleSide,
    opacity: 0.8,
    transparent: true,
    depthWrite: false,
  });

  const cloudMesh = new THREE.Mesh(
    new THREE.SphereGeometry(102, 32, 32),
    new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture("/clouds.png"),
      // side: THREE.DoubleSide,
      transparent: true,
      side: THREE.DoubleSide,
      // depthWrite: false,
      // depthTest: false,
      alphaTest: 0.1,
      opacity: 0.5,
    })
    // new THREE.MeshPhongMaterial({
    //   alphaMap: new THREE.Texture("/clouds.png"),
    //   // side: THREE.DoubleSide,
    //   opacity: 0.1,
    //   // transparent: true,
    //   depthWrite: false,
    // })
  );

  useEffect(() => {
    globeEl.current.pointOfView({ altitude: 3.5 });
    globeEl.current.controls().autoRotateSpeed = 0.3;
    globeEl.current.pointOfView({ lat: 9.6, lng: -34.5, altitude: 1.5 });
  }, []);

  useEffect(() => {
    console.log("instance:", globeEl.current.renderer());

    //  Clouds
    // const clouds2 = globeEl.current.scene().children[0];
    const scene = globeEl.current.scene();
    const globeMesh =
      scene.children.length > 1 &&
      scene.getObjectByProperty("uuid", scene.children[3].uuid);

    // console.log("globe", globeMesh);
    console.log("scene", scene.children);
    // scene.remove(globeMesh);
    cloudMesh.renderOrder = 1;
    scene.add(cloudMesh);
  }, [globeEl.current]);

  useEffect(() => {
    const loadSVG = (url) => {
      //

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xb0b0b0);

      //

      var helper = new THREE.GridHelper(160, 10);
      helper.rotation.x = Math.PI / 2;
      scene.add(helper);

      //

      var loader = new SVGLoader();

      loader.load(url, function (data) {
        var paths = data.paths;

        var group = new THREE.Group();
        group.scale.multiplyScalar(0.25);
        group.position.x = -70;
        group.position.y = 70;
        group.scale.y *= -1;

        for (var i = 0; i < paths.length; i++) {
          var path = paths[i];

          var fillColor = path.userData.style.fill;
          if (
            guiData.drawFillShapes &&
            fillColor !== undefined &&
            fillColor !== "none"
          ) {
            var material = new THREE.MeshBasicMaterial({
              color: new THREE.Color().setStyle(fillColor),
              opacity: path.userData.style.fillOpacity,
              transparent: path.userData.style.fillOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
              wireframe: guiData.fillShapesWireframe,
            });

            var shapes = path.toShapes(true);

            for (var j = 0; j < shapes.length; j++) {
              var shape = shapes[j];

              var geometry = new THREE.ShapeBufferGeometry(shape);
              var mesh = new THREE.Mesh(geometry, material);
              // mesh.lookAt(globeEl.current.camera().position);

              group.add(mesh);
            }
          }

          var strokeColor = path.userData.style.stroke;

          if (
            guiData.drawStrokes &&
            strokeColor !== undefined &&
            strokeColor !== "none"
          ) {
            var material = new THREE.MeshBasicMaterial({
              color: new THREE.Color().setStyle(strokeColor),
              opacity: path.userData.style.strokeOpacity,
              transparent: path.userData.style.strokeOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
              wireframe: guiData.strokesWireframe,
            });

            for (var j = 0, jl = path.subPaths.length; j < jl; j++) {
              var subPath = path.subPaths[j];

              var geometry = SVGLoader.pointsToStroke(
                subPath.getPoints(),
                path.userData.style
              );

              if (geometry) {
                var mesh = new THREE.Mesh(geometry, material);
                // mesh.lookAt(globeEl.current.camera().position);

                group.add(mesh);
              }
            }
          }
        }
        group.lookAt(globeEl.current.camera().position);

        globeEl.current.scene().add(group);
      });
    };
    loadSVG("/tiger.svg");
    console.log(globeEl.current.scene());
  }, [globeEl]);

  useEffect(() => {
    globeEl.current.controls().autoRotate = autoplay;
  }, [autoplay]);

  useEffect(() => {
    // custom globe material
    const globeMaterial = globeEl.current.globeMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load(
      "//unpkg.com/three-globe/example/img/earth-water.png",
      (texture) => {
        globeMaterial.specularMap = texture;
        globeMaterial.specular = new THREE.Color("grey");
        globeMaterial.shininess = 15;
      }
    );

    // setInterval(
    //   () => (
    //     (cloudMesh.rotation.y -= 0.00005), (cloudMesh.rotation.x -= 0.00001)
    //   ),
    //   10
    // );

    setTimeout(() => {
      // wait for scene to be populated (asynchronously)
      const directionalLight = globeEl.current
        .scene()
        .children.find((obj3d) => obj3d.type === "DirectionalLight");
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  }, []);

  return (
    <Globe
      ref={globeEl}
      renderConfig={{
        sortObjects: false,
      }}
      waitForGlobeReady={false}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      showAtmosphere={true}
      globeMaterial={{
        transparent: false,
        alphaTest: 0,
      }}
      customLayerData={data}
      onCustomLayerHover={(obj, prevObj) => {
        setAutoplay(!obj);
      }}
      customLayerLabel={(d) => renderToString(<Thumbnail d={d} />)}
      customThreeObject={(d) => {
        const sphereGeometry = new THREE.SphereBufferGeometry(d.radius);
        const sphereMesh = new THREE.Mesh(
          sphereGeometry,
          new THREE.MeshLambertMaterial({ color: 0x000020 })
        );
        const outlineMesh = new THREE.Mesh(
          sphereGeometry,
          new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide })
        );
        outlineMesh.scale.multiplyScalar(1.15);

        return d.outline ? sphereMesh : outlineMesh;
      }}
      customThreeObjectUpdate={(obj, d) => {
        Object.assign(
          obj.position,
          globeEl.current.getCoords(d.lat, d.lng, d.alt)
        );
      }}
    />
  );
};

const guiData = {
  currentURL: "models/svg/tiger.svg",
  drawFillShapes: true,
  drawStrokes: true,
  fillShapesWireframe: false,
  strokesWireframe: false,
};

const StyledThumbnail = styled.div`
  width: 16em;
  height: 9em;
  position: relative;
`;
export default GlobeComponent;
