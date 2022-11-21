import styled from "styled-components";
import bg from "../../../assets/images/bg.png";

const Wrapper = styled.aside`
  .dashboard {
    background-image: url(${bg});
    background-repeat: no-repeat;
    /* background-color: var(--blue-200); */
    background-size: cover;

    height: 100vh;
    /* overflow: hidden; */
    overflow-y: scroll;
    position: relative;

    /* & > .dashboardblur {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: blue;
      backdrop-filter: blur(50px);
      opacity: 0.3;
      z-index: 1;
    }

    & > .dashboard-content {
      z-index: 2;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    } */
  }

  .dashboard-page {
    display: flex;
    padding-inline: 4%;
    margin-top: 25px;

    & > .left-content {
      width: 25%;
    }
    & > .middle-content {
      width: 100%;
    }

    & > .right-content {
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

  @media screen and (max-width: 1224px) {
    .left-content {
      display: none;
    }

    .dashboard-page {
      margin-inline: 0%;
      padding: 2%;
    }
  }

  @media screen and (max-width: 924px) {
    .right-content {
      display: none;
    }

    .middle-content{
      width: 90%;
    }
  }
`;

export default Wrapper;
