import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  & > label {
    color: black;
  }

  & > .listinput {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    & > input {
      border: 2px solid #c4def4;
      height: 50px;
      padding-left: 5px;
      width: 100%;
      &:focus {
        border: 3px solid #539fdf;
        outline: none;
      }
    }
    & > .icons {
      display: flex;
      align-items: center;
      gap: 4px;
      & > span {
        font-size: 2.3rem;
        cursor: pointer;
      }
    }
  }
`;
export default Wrapper;
