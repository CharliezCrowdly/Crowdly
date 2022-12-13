import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  background-color: white;
  padding: 2%;
  border-radius: 7px;
  & > .range {
    display: flex;
    justify-content: space-between;
    & > p:first-child {
      color: var(--dark-purple);
      font-weight: bold;
    }
  }
  & > input {
    background: black;
    color: black;
    width: 100%;
  }
`;
export default Wrapper;
