import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2%;

  .posts {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > .post-container {
      width: 100%;
      height: 100%;
      & > .post {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        transition: 1s;

        &:hover {
          transform: scale(1.1);
          & > .icon {
            right: 5%;
          }
        }
        & > .video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        & > .music-player {
          width: 100%;
          height: 100%;
        }

        & > .icon {
          font-size: 1.5rem;
          position: absolute;
          top: 10%;
          right: 3%;
          color: var(--white-color);
          transition: 1s;
        }
      }
    }
  }

  & > .yomodel {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 1000;

    & > .modely {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
    
    }
  }
`;
export default Wrapper;
