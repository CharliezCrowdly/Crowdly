import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 455px;

  .comment-form {
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 2%;

    & > .description {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--black-color);

      &::placeholder {
        color: var(--black-600);
      }
    }

    & > .btn-post {
      min-width: 70px;
      border: none;
      outline: none;
      font-weight: bolder;
      text-transform: capitalize;
      background-color: transparent;
      font-size: 0.7em;
      color: var(--blue-900);
    }
  }
`;

export default Wrapper;
