import { FC } from "react";
import styled from "styled-components";
type T = any;

const BackgroundVideo: FC<T> = () => {
  return (
    <VideoContainer>
      <video
        // style={{ clipPath: "url(#clipPathVideo)" }}
        id="videoBG"
        // poster="poster.JPG"
        autoPlay
        muted
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

export default BackgroundVideo;
const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  video {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
  }
  /*  */
`;
