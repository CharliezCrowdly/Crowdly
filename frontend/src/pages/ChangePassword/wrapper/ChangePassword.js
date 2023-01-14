import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2%;
  width: 400px;
  margin-inline: auto;
  border-radius: 15px;
  & > h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  & > button {
    width: 100%;
    background-color: var(--blue-1100);
    text-align: center;
    padding: 2%;
    margin-top: 7px;
    color: white;
    font-weight: bold;
    border: none;
    text-transform: capitalize;
  }

  & > .mt-2 {
    margin-block: 7px;
  }
`;
export default Wrapper;
