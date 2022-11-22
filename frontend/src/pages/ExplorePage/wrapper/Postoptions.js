import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 3%;
  .post-option {
    display: fle;
    justify-content: space-between;
    & > .post-interaction {
      display: flex;
      gap: 7px;
      font-size: 1.6em;

      & > .icon {
        cursor: pointer;
        color: var(--black-600);
        &.red {
          color: red;
        }
      }
    }
  }
`;

export default Wrapper;
