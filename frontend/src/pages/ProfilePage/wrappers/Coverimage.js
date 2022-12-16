import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .coverimg {
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
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
