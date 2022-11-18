import styled from "styled-components";

const Wrapper = styled.aside`
  .filter-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > .slide-range {
      padding: 2% 5%;
      height: 100px;
      border-radius: 15px;

      & > h4 {
        color: var(--blue-700);
      }

      & > .range-container {
        margin-top: 20px;

        & > input {
          width: 100%;
          background-color: var(--blue-700);
        }

        & > span {
          width: 55px;
          padding: 10px 10px;

          text-align: center;
          color: var(--blue-700);
        }
      }
    }

    & > .job-filter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8%;
      border-radius: 15px;
      width: 100%;

      & > .btn-clear {
        color: var(--blue-900);
      }

      & > .filter-name {
        font-size: 1.5rem;
        color: var(--black-600);
      }
    }

    & > .lvl {
      padding: 8%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      & > .lvlheader {
        display: flex;
        justify-content: space-between;
      }

      & > .lvlboxes {
        & > .box {
          display: flex;
          align-items: center;
          gap: 20px;
          & > .label-content {
            color: var(--black-600);
            font-weight: 700;
          }
        }
      }
    }

    & > .joblocation {
      display: flex;
      flex-direction: column;
      padding: 8%;
      border-radius: 10px;
      gap: 0.7rem;
      & > .jobheader {
        display: flex;
        justify-content: space-between;
      }

      & > .box {
        display: flex;
        align-items: center;
        gap: 20px;
        & > .label-content {
          color: var(--black-600);
          font-weight: 700;
        }
      }

      & > .searchbar {
        background-color: var(--blue-300);
        border-radius: 50px;
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        height: 1.7rem;
        & > .search-icon {
          position: absolute;
          top: 27%;
          left: 4%;
          color: var(--black-500);
        }
        & > .search-input {
          width: 100%;
          height: 100%;
          padding-left: 13%;
          outline: none;
          border: none;
          background-color: transparent;
        }
      }
    }

    & > .jobtype {
      padding: 8%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      & > .jobtypeheader {
        display: flex;
        justify-content: space-between;
      }

      & > .jobtypeboxes {
        & > .box {
          display: flex;
          align-items: center;
          gap: 20px;
          & > .label-content {
            color: var(--black-600);
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export default Wrapper;
