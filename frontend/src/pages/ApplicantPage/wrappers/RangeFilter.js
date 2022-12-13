import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  background-color: white;
  padding-inline: 1%;
  border: 1px solid black;

  & > .range{
    display: flex;
    justify-content: space-between;
  }
  & > input {
    background: black;
    color: black;
    width: 100%;
  }
`;
export default Wrapper;
