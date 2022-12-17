import styled from "styled-components";
const Wrapper = styled.div`
  & > .signalfollow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 1%;

    & > .info {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: space-between;
      text-align: start;

      & > span {
        text-align: start;
        display: flex;
        justify-content: flex-start;
        text-align: start;
      }
      & > img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
    }

    & > button {
      padding: 1%;
      background-color: var(--blue-1100);
      color: white;
      font-weight: bold;
      text-transform: capitalize;
      border: none;
      cursor: pointer;
    }

    & > .btn-uf {
      padding: 1%;
      background-color: var(--blue-1100);
      color: white;
      font-weight: bold;
      text-transform: capitalize;
      border: none;
      cursor: pointer;
      width: 100px;

      &.active {
        background-color: transparent;
        border: 2px solid var(--blue-1100);
        color: var(--blue-1100);
        width: 100px;
      }
    }
  }
`;
export default Wrapper;
