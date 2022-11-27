import styled from "styled-components"

const Wrapper = styled.div`
  .post-form {
    display: flex;
    width: 100%;
    padding-inline: 3%;
    align-self: flex-end;
    justify-self: end;
    margin-top: 10px;

    & > .input-container {
      display: flex;
      width: 100%;

      & > .description {
        outline: none;
        margin-left: 2%;
        width: 100%;
        border: none;
      }
    }

    & > .btn-post {
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--blue-900);
      font-weight: bold;
      font-size: 1.1em;

      &:disabled {
        color: var(--blue-700);
      }
    }
  }
`;
export default Wrapper;