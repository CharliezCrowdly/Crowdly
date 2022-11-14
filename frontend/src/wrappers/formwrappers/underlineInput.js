import styled from "styled-components";

const Wrapper = styled.aside`
  .underlineInput-container {
    width: 100%;
    padding: 2%;
    outline: none;
    background-color: transparent;

    border-radius: var(--borderRadius);
    border: none;
    border-bottom: 1px solid var(--grey-200);
    color: rgb(188, 185, 185);

    &:focus {
      background-color: transparent;
    }
  }
`;

export default Wrapper;
