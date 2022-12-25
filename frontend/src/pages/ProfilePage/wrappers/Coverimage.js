import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .coverimg {
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
  }

  & > .foll {
    position: absolute;
    left: 2%;
    bottom: -20px;
    display: flex;
    gap: 5px;
    text-transform: capitalize;
    & > .followers {
      background-color: white;

      padding: 4%;
      text-align: center;
      color: var(--blue-900);
      border-radius: 5px;
      cursor: pointer;

      & > h2 {
        color: black;
      }

      &.active {
        border: 3px solid var(--blue-900);
      }
    }

    & > .following {
      background-color: white;

      padding: 4%;
      text-align: center;
      color: var(--blue-900);
      border-radius: 5px;
      cursor: pointer;
      & > h2 {
        color: black;
      }
      &.active {
        border: 3px solid var(--blue-900);
      }
    }
  }

  & > .btns {
    position: absolute;
    bottom: 9%;
    right: 3%;
    display: flex;
    gap: 5px;
    & > button {
      background-color: rgba(255, 255, 255, 0.61);
      backdrop-filter: blur(25px);
      border: none;
      width: 100px;
      height: 30px;
      border-radius: 25px;
    }
    & > .btn-edit {
      background-color: rgba(255, 255, 255, 0.61);
      backdrop-filter: blur(25px);
      padding-inline: 3%;
      padding-block: 1%;
      border-radius: 25px;
      border: none;
      white-space: nowrap;
      font-size: 0.7rem;
      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default Wrapper;
