import styled from "styled-components";

const Wrapper = styled.aside`
  .jobbox {
    display: flex;
    flex-direction: column;
    padding: 4%;
    border-radius: 15px;
    margin-top: 10px;
    gap: 0.9rem;

    & > .jobboxheader {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > .companyinfo {
        display: flex;
        gap: 2%;
        & > .jobinfo {
          display: flex;
          align-items: center;
          gap: 5px;
          & > .jobfield {
            display: flex;
            flex-direction: column;
            white-space: nowrap;
            & > .jobname {
              white-space: nowrap;
              color: var(--black-800);
              font-weight: 800;
            }
            & > .companyname {
              white-space: nowrap;
              color: var(--black-500);
              font-size: 0.8rem;
            }
          }
          & > span {
            width: max-content;
            height: 30px;
            align-self:baseline;
            min-width: 100px;
            padding-inline:5px;
            padding-bottom: 1.5%;
            white-space: nowrap;
            font-size: 0.8rem;
            text-align: center;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;

            background-color: var(--blue-1100);
            color: white;
            font-weight: 500;
          }
        }
      }

      & > .savejob {
        display: flex;
        align-items: center;

        white-space: nowrap;

        & > .blue-color {
          color: var(--blue-900);
          font-weight: 600;
          font-family: var(--inter-font);
          margin-right: 1rem;
        }
      }
    }
    & > .jobtype {
      display: flex;
      gap: 2%;

      & > .bluebox {
        background-color: #5959ff;
        padding-block: 1%;
        padding-inline: 1%;
        text-align: center;
        width: max-content;
        min-width: 20%;
        border-radius: 10px;
        color: white;
        font-weight: 500;
      }
    }

    & > .jobboxfooter {
      display: flex;
      justify-content: space-between;

      & > .jobspecification {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 5%;
        & > .jobprice {
          display: flex;
          align-items: center;
          & > p > .light-text {
            font-size: 0.8rem;
          }

          & > .blue-icon {
            color: var(--blue-1000);
            font-size: 1.5rem;
          }
        }
        & > .jobLocation {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          text-transform: capitalize;

          & > .blue-icon {
            color: var(--blue-1000);
            font-size: 1.5rem;
          }

          & > .light-text {
            font-size: 0.8rem;
          }
        }
      }
      & > .btn-apply {
        border-radius: 10px;
        font-size: 1.1rem;
        padding-inline: 10%;
        padding-block: 2%;
        background-color: var(--blue-1100);
        color: var(--white-color);
        font-weight: bold;
        border: none;
        outline: none;
        white-space: nowrap;
        cursor: pointer;
      }
    }

    & > .jobdetail {
      color: #4c4c4c;
      line-height: 1rem;
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
