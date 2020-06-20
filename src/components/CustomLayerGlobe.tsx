// @ts-nocheck

import { FC, useState, useEffect, useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import * as THREE from "three";
import Globe from "react-globe.gl";
// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
// const THREE = dynamic(() => import("three"), { ssr: false });

type T = any;
// Gen random data

const GlobeComponent: FC<T> = () => {
  const globeEl = useRef();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/moon-landing-sites/moon_landings.json"
    )
      .then((r) => r.json())
      .then((projects) => {
        const d = projects.map((p) => ({
          lat: p.lat,
          lng: p.lng,
          alt: Math.random() * 0.2 + 0.1,
          radius: Math.random() * 8,
          color: ["red", "white", "blue", "green"][
            Math.round(Math.random() * 3)
          ],
        }));
        setData(d);
      });
  }, []);

  // useEffect(() => {
  //   (function moveSpheres() {
  //     data.forEach((d) => (d.lat += 0.2));
  //     setData(data.slice());
  //     requestAnimationFrame(moveSpheres);
  //   })();
  // }, []);

  useEffect(() => {
    globeEl.current.pointOfView({ altitude: 3.5 });
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      customLayerData={data}
      customThreeObject={(d) =>
        new THREE.Mesh(
          new THREE.SphereBufferGeometry(d.radius),
          new THREE.MeshLambertMaterial({ color: d.color })
        )
      }
      customThreeObjectUpdate={(obj, d) => {
        Object.assign(
          obj.position,
          globeEl.current.getCoords(d.lat, d.lng, d.alt)
        );
      }}
    />
  );
};

export default GlobeComponent;
