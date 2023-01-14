import styled from "styled-components";
const Wrapper = styled.div`
  padding: 1%;
  border: 1px solid #c0c0c0;
  height: 75px;
  overflow-y: hidden;
  border-radius: 15px;
  cursor: pointer;

  &.active {
    height: max-content;
    overflow: visible;
    & > .applicant-header {
      & > .img-container {
        & > .profilePicture {
          transform: translateX(-30px);
          box-shadow: -10px 11px 69px 7px #badedc;
          -webkit-box-shadow: -10px 11px 69px 7px #badedc;
          -moz-box-shadow: -10px 11px 69px 7px #badedc;
          width: 70px;
          height: 70px;
        }
      }
    }
  }

  & > .applicant-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > .img-container {
      max-width: 200px;
      width: calc(100px + 6.5vw);
      display: flex;
      align-items: center;
      gap: 5px;
      & > .profilePicture {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        transition: 1s all;
      }

      & > .info {
        line-height: 19px;
        & > p {
          color: var(--black-550);
        }
      }
    }
    & > p {
      justify-self: center;
    }

    & > .action {
      display: flex;
      align-items: center;
     
      & > .sta {
        border: 2px solid black;
        padding-inline: 10px;
        min-width: 100px;
        text-align: center;
        border-radius: 25px;
      }
    }
  }

  & > hr {
    border: 1px dashed var(--primary-color);
    margin-top: 20px;
    margin-block: 30px;
  }

  & > .applicant-body {
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > .userinfo {
      width: 45%;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-left: 8%;

      & > .info {
        & > p {
          color: #8c8c8c;
          & + p {
            font-weight: bold;
            color: #353535;
          }
        }
      }
    }

    & > .information {
      width: 100%;
      & > .skills {
        width: 400px;
        & > .list {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
          & > button {
            background-color: #fef93f;
            color: black;
            border: none;
            min-width: 70px;
            padding: 1%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            cursor: pointer;
            & > span {
              margin-left: 4px;
            }
          }
        }
      }
    }

    & > .bid {
      margin-right: 5%;
      & > h1 {
        white-space: nowrap;
        color: #c1c1c1;
      }
    }
  }

  & > .about {
    display: flex;
    width: 100%;

    & > .userinfo {
      width: 27%;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-left: 8%;

      & > .info {
        width: 100%;
        & > p {
          color: #8c8c8c;
          & + p {
            font-weight: bold;
            color: #353535;
          }
        }
      }
    }

    & > .content {
      width: 100%;
    }
  }
  & > .options {
    margin-top: 10px;
    display: flex;
    justify-content: end;
    gap: 5px;
    & > .btn {
      justify-self: flex-end;
      color: white;
      font-weight: bold;
      border-radius: 25px;
      min-width: 100px;
      font-size: 1.2rem;
      padding: 0.5%;
    }

    & > .hire {
      background-color: black;
    }

    & > .reject {
      background-color: #ff4040;
      border: none;
    }
  }
`;
export default Wrapper;
