import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 5%;
  position: relative;
  .right-section {
    height: max-content;
    width: 30%;
    /* background-color: #faf6be; */
    /* border: 10px solid #fdfdc5; */

    position: relative;
  }

  .left-section {
    width: 70%;
    padding: 2%;
    border-radius: 15px;

    .one {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > .title {
        display: flex;
        justify-content: space-between;
        & > h1 {
          font-size: 1.5rem;
          font-weight: 400;
        }

        & > .dropdown {
          display: flex;
          flex-direction: column;
          position: relative;
          gap: 20px;

          & > .dropdown-option {
            position: absolute;
            text-align: center;
            top: 15px;
            left: 0;
            padding: 10px 15px;
            display: flex;

            flex-direction: column;
            backdrop-filter: blur(20px);

            & > .icon {
              cursor: pointer;
            }
          }
        }
      }

      & > .place {
        display: flex;
        gap: 10px;
        margin-top: 5px;
      }

      & > .buttons {
        display: flex;
        gap: 5px;
        & > .btn-easy {
          background-color: var(--blue-900);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 1rem;
          padding: 10px 20px;
          width: 100px;
        }

        & > .btn-save {
          color: var(--blue-1100);
          border: 1px solid var(--blue-1100);
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 25px;
          background-color: transparent;
          display: flex;
          align-items: center;
          width: 100px;
          justify-content: center;
          width: 100px;

          & > .bookmark {
            & > .icon {
              transform: translateY(2.6px);
            }
          }
        }
      }

      & > .status {
        font-weight: bold;
        margin-top:10px;

        & > span {
          background-color: purple;
          padding: 1%;
          color: white;
          font-weight: normal;
          border-radius: 7px;
          margin-left: 8px;
        }
      }

      & > .jobtype {
        display: flex;
        align-items: center;
        gap: 5px;

        & > .icon {
          font-size: 1.4rem;
        }
      }
      & > .recommend {
        display: flex;
        align-items: center;
        gap: 3px;
        margin-block: 5px;
      }
    }

    .two {
      & > .description {
        margin-block: 10px;
      }
      & > .responsiblity {
        margin-block: 5px;
        font-size: 14px;
        margin-top: 10px;

        & > h3 {
          font-size: 1em;
          color: black;
        }

        & > li {
          padding-left: 15px;
          list-style: circle;
          list-style-type: circle;
          list-style-type: disc;
          margin-top: 5px;
        }
      }
    }

    .three {
      border: 0.1px solid var(--blue-600);
      padding-block: 1%;
      padding-inline: 2%;
      border-radius: 8px;
      margin-top: 17px;
      & > .info-container {
        display: flex;
        align-items: center;
        width: 100%;

        & > img {
          width: 70px;
          height: 70px;
          object-fit: cover;
        }

        & > .info {
          display: flex;
          flex-direction: column;
          margin-left: 10px;

          & > .username {
            font-weight: bold;
          }
        }

        & > .btn-follow {
          color: var(--blue-1100);
          border: 1px solid var(--blue-1100);
          background-color: transparent;
          margin-left: auto;
        }
      }

      & > .company-employee {
        display: flex;
        align-items: center;
        font-size: 12px;
        & > span:nth-child(1) {
          font-weight: bold;
          color: black;
          vertical-align: middle;
          margin-inline: 3px;
        }
      }

      & > .description {
        position: relative;

        & > .btn-box {
          & > .readmore {
            color: var(--blue-1100);
            font-weight: bold;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
        }

        & > .btn-container {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          background: rgb(205, 204, 205);
          background: linear-gradient(
            166deg,
            rgba(205, 204, 205, 0.18841039833902307) 0%,
            rgba(112, 117, 117, 0.0959734235491071) 96%
          );
          & > .readmore {
            border: none;
            background-color: transparent;
            margin-left: 2px;
            color: var(--blue-1100);
            font-weight: bold;

            &.active {
              position: absolute;
              bottom: 0;
              left: 40%;
              padding: 5px 10px;
              border: 1px solid var(--blue-1100);
              border-radius: 25px;
              background-color: white;
              cursor: pointer;

              backdrop-filter: blur(20px);
              box-shadow: 10px 10px 68px 0px rgba(168, 154, 154, 0.75);
              -webkit-box-shadow: 10px 10px 68px 0px rgba(168, 154, 154, 0.75);
              -moz-box-shadow: 10px 10px 68px 0px rgba(168, 154, 154, 0.75);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 904px) {
    & > .left-section {
      padding: 5%;
      width: 100%;
    }

    & > .right-section {
      display: none;
      justify-self: flex-end;
    }
  }
`;
export default Wrapper;
