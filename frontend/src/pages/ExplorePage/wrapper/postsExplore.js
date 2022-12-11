import styled, { css } from "styled-components";

function createCSS() {
  let styles = "";
  let number = 0;

  for (let i = 1; i < 20; i += 1) {
    if (i % 3 === 0) {
      number += 4;
    } else {
      number = number + 3;
      styles += `
           &:nth-child(${number}) {
             background: tomato;
             grid-row: auto / span 2;
           }
         `;
    }
  }

  return css`
    ${styles}
  `;
}

const Wrapper = styled.div`
  .posts {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 20px;
    position: relative;
    & > .post {
      height: 100%;
      width: 100%;
      & > .post-container {
        height: 100%;
        width: 100%;
        cursor: pointer;
        & > img {
          height: 100%;
          width: 100%;
          backdrop-filter: blur(50px);
          background: rgba(255, 255, 255, 0.61);
        }

        & > .video-container {
          position: relative;
          background-color: whitesmoke;
          height: 100%;
          width: 100%;

          & > .play-icon {
            position: absolute;
            top: 2%;
            right: 2%;
            color: whitesmoke;
            font-size: 1.5em;
          }
          & > .post-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      &:nth-child(3) {
        background: tomato;
        grid-row: auto / span 2;
      }

      ${createCSS()}
    }
  }
`;
export default Wrapper;
