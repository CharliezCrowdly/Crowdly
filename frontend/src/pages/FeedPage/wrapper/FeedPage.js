import styled from "styled-components";

const Wrapper = styled.div`
  .feedPage {
    display: flex;
    & > .middle-container {
      width: 100%;
      padding-inline: 8%;
    }

    & > .right-container {
      width: 35%;

      & > .users {
        position: sticky;
        top: 70px;
      }

      & > .todo-box {
        position: sticky;
        top: 380px;
      }
    }
  }

  @media screen and (max-width: 840px) {
    .right-container {
      display: none;
    }

    .YourWorkPage {
      & > .middle-container {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
