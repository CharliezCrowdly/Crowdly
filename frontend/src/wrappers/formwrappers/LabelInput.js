import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > label{
    color: black;
    
  }

  & > input {
    border: 2px solid #c4def4;
    height: 50px;
    padding-left: 5px;
    &:focus {
      border: 3px solid #539fdf;
      outline: none;
    }
  }
`;
export default Wrapper;
