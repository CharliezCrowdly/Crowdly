import styled from "styled-components";

const Wrapper = styled.div`
  .comment-lst {
    display: flex;
    justify-content: space-between;
    width: 457px;
    gap: 2%;
    padding: 2%;
    align-items: center;

    & > .comment-header {
      display: flex;
      align-items: center;
      width: 100%;
      & > .username {
        margin-left: 2%;
        font-size: 0.7rem;
        font-weight: bold;
        white-space: nowrap;
      }

      & > .description {
        font-size: 0.7rem;
        margin-left: 5px;
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
