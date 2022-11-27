import styled from "styled-components";

const Wrapper = styled.div`

  height: 422px;
  /* background-color: blue; */
  overflow-y: hidden;
  .msg-box {
    & > .received-msg {
      display: flex;
      margin-top: 5px;

      .user-info {
        margin-right: 3%;
        & > .time {
          color: var(--black-500);
          font-weight: 500;
        }
      }

      & > .msg-description {
        padding: 2%;
        border-radius: 10px;
        border-top-left-radius: 0px;
        max-width: 60%;
        color: var(--black-color);
        font-weight: 500;
        font-family: var(--inter-font);

        background-color: var(--light-blue-100);
      }
    }

    & > .sent-msg {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 5px;

      .user-info {
        margin-left: 3%;
        & > .time {
          color: var(--black-500);
          font-weight: 500;
        }
      }

      & > .msg-description {
        padding: 2%;
        border-radius: 10px;
        border-top-right-radius: 0px;
        max-width: 60%;
        color: var(--white-color);
        font-weight: 500;
        font-family: var(--inter-font);

        background-color: var(--light-purple);
      }
    }
  }
`;
export default Wrapper;