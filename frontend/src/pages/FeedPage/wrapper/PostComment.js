import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;

  .comment-form {
    border-radius: 50px;
    display: flex;
    align-items: center;
   
    border: 1px solid var(--black-600);

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
      font-size: 0.9em;
    }
  }
`;

export default Wrapper;
