import styled from "styled-components";

const Wrapper = styled.div`
  .recommendation {
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    margin-top: 10px;
    border-radius: 8px;
    line-height: 15px;
    text-align: start;

    & > .user-content {
      display: flex;
      align-items: center;
      gap: 9px;
 
      & > .user-info {
        gap: 0;
        

        & > .username {
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
        }

        & > .mutual {
          font-size: 0.7rem;
          color: var(--black-500);
          white-space: nowrap;
        }
      }


    }

    & > .btn-follow,.btn-unfollow{
        width: max(70px ,calc(6.5vw));
    }
  }
`;
export default Wrapper;
