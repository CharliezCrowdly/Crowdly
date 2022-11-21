import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateZ(9rem);
  label {
    text-transform: capitalize;
    margin-block: 2px;
    font-weight: bold;
    color: black;
  }

  input {

    height: 40px;
    margin-block: 10px;
    padding-left: 5px;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    box-shadow: inset 1px 1px 1px 2px #e7e7e7;
    padding-left: 15px;

    &:focus {
      outline: 2px solid var(--blue-700);
      border: none;
    }
  }
`;
export default Wrapper;
