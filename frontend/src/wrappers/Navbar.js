import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(20px);

  & > .notifylst {
    position: absolute;
    top: 60px;
    right: 0;
    height: 600px;
    overflow: hidden;
    overflow-y: scroll;
    background-color: white;
  }
  & > .navbar {
    display: flex;
    justify-content: space-around;
    padding: 0.5% 0%;
    /* background-color: blue; */
    align-items: center;
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 0;
    left: 0;
    /* z-index: 3;
    width: 100%; */

    & > .nav-links {
      & > .nav-link {
        display: flex;
        align-items: center;
      }
    }
    & > .nav-content {
      display: flex;
      align-items: center;
      gap: 4px;
      position: relative;
      & > .notify {
        position: relative;
        margin-right: 10px;
        cursor: pointer;

        & > .bell-icon {
          font-size: 1.7rem;
        }
        & > span {
          background-color: red;
          color: white;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -10px;
          width: 25px;
          text-align: center;
          height: 15px;
        }
      }
      & > .dropdown-menus {
        position: relative;
        & > h5 {
          cursor: pointer;
        }

        & > .dropdown-options {
          position: absolute;
          top: 20px;
          left: 0;
          width: 100px;
          border-radius: 5px;
          text-align: center;

          & > li {
            padding: 2%;
            font-weight: 500;
            text-transform: capitalize;
            cursor: pointer;
            &:hover {
              background-color: var(--light-blue-500);
              color: white;
            }
          }
        }
      }
    }
    & > .active {
      border-radius: 50px;
      background-color: #5555ff;
      color: white !important;
    }
    & > .nav-links {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 50%;
      justify-content: center;
      .active {
        border-radius: 50px;
        background-color: #5555ff;
        color: white !important;
      }
      & > .nav-link {
        display: flex;
        align-items: center;
        color: black;
        font-weight: 500;
        padding-inline: 4%;

        padding-block: 0.7%;
        white-space: nowrap;

        & > .icon {
          margin-right: 10px;
          font-size: 1.2rem;
          color: var(--blue-400);
          transform: translateY(3px);
        }

        &.active {
          & > .icon {
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .navbar {
      display: none;
    }
  }
`;

export default Wrapper;
