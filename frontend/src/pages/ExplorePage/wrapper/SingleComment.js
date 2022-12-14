import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;

  .comment-header {
    display: flex;
    align-items: center;

    padding-right: 3%;
    padding-left: 3%;

    & > .comment-box {
      width: 100%;
      & > .comment-info {
        & > .username {
          font-weight: bold;
          margin-left: 2%;
          color: var(--black-650);
        }

        & > .description {
          width: 100%;
          border: none;
          outline: none;
          background-color: transparent;
          color: var(--black-500);
          margin-left: 2%;
          font-size: 0.7em;
        }
      }

      & > .comment-time {
        font-size: 0.7em;
        padding-left: 3%;
        white-space: nowrap;
        color: var(--black-500);
      }
    }

    & > .btn-delete {
      position: absolute;
      right: 2%;
      color: var(--black-600);
    }
  }
`;

export default Wrapper;
