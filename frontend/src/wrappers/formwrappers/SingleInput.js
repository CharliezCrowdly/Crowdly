import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > .input-field {
    position: relative;
    padding-block: 2%;
    border: 2px solid #c4def4;

    background-color: white;

    &:hover {
      border: 3px solid #539fdf;
    }

    .caret {
      border: 0.6rem solid transparent;
      border-top-color: #777;
      translate: 0.25%;
      position: absolute;
      top: 12px;
      right: 5px;
    }

    & > .singleselectinput {
      display: block;

      color: var(--black-600);
      font-size: 0.9rem;
      text-transform: capitalize;
      position: relative !important;

      cursor: pointer;

      & > .usertype {
        padding: 2%;
      }

      & > .divider {
        margin-block: 10px;
      }

      & > .options {
        position: absolute;
        top: 38px;
        left: 0;
        width: 100%;
        background-color: white;
        z-index: 8;
        & > .option {
          height: 50px;
          padding: 2%;
          border: 0.5px solid var(--light-blue-500);

          &:hover {
            background-color: var(--primary-color);
            color: white;
          }
        }
      }
    }
  }
`;

export default Wrapper;
