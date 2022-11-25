import styled from "styled-components";

const Wrapper = styled.div`
  .usermessage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 1%;
    line-height: 0.8rem;

    &.active{

      background-color: var(--blue-100);
    }

    

    & > .message-info {
      margin-top: 3px;
      display: flex;
      align-items: center;

      & > .user-info {
        margin-left: 7px;
        align-self: flex-start;

        & > .username {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--black-550);
          white-space: nowrap;
        }

        & > .user-msg {
          font-size: 0.8rem;
          color: var(--black-300);
        }
      }
    }

    & > .time {
      color: var(--black-300);
      font-size: 0.8rem;
      align-self:flex-start;
      text-align: end;
      align-items: flex-end;
      white-space: nowrap;
    }
  }
`;
export default Wrapper;
