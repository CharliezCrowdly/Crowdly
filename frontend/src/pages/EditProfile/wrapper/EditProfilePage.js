import styled from "styled-components";

const Wrapper = styled.div`
  & > h1 {
    margin-inline: auto;
    width: max-content;
  }
  & > .content {
    width: calc(400px + 10%);
    max-width: 900px;
    padding: 2%;
    margin: 0 auto;
    border-radius: 15px;
    height: 85vh;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    & > .tabs-container {
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 20px;
      justify-content: center;
      counter-reset: step;

      & > .singletab {
        text-align: center;
        border-bottom: 1.5px soild #f0381f;
        position: relative;

        &:before {
          content: counter(step);
          counter-increment: step;
          width: 20px;
          line-height: 20px;
          display: block;
          font-size: 10px;
          color: #333;
          background: white;
          border-radius: 3px;
          margin: 0 auto 5px auto;
        }

        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background: white;
          position: absolute;
          left: -50%;
          top: 9px;
          z-index: -1;
        }

        &:first-child:after {
          content: none;
        }
        &.active:before,
        &.active:after {
          background: #27ae60;
          color: white;
        }
        & > .tas {
          font-weight: bold;
          font-size: 1.2rem;
          cursor: pointer;
          &.active {
            color: var(--blue-1100);
          }
        }
      }
    }
    & > .save {
      padding-block: 10px;

      margin-top: 10px;
      display: flex;
      justify-content: center;
      margin-top: auto;

      & > button {
        background-color: var(--blue-1100);
        color: white;
        font-weight: bold;
        margin-left: auto;
        border: none;
        margin: 0 auto;
        cursor: pointer;

        height: 40px;
        width: 175px;
      }
    }
  }

  .alerty {
    width: calc(400px + 10%);

    max-width: 900px;
    margin: 0 auto;
  }
`;
export default Wrapper;
