import styled from "styled-components";

const Wrapper = styled.div`
  .messagepage {
    display: flex;
    padding: 2% 4%;
    gap: 5%;

    & > .messagelist {
      width: 30%;
      height: 80vh;
      padding: 2%;
      overflow-y: auto;
      border-radius: 25px;
    }

    & > .messageContainer {
      padding: 2%;

      width: 100%;
      height: 80vh;

      border-radius: 25px;

      & > .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;

        & > .info {
          display: flex;
          align-items: center;

          & > .icon {
            display: none;
            cursor: pointer;
          }

          & > .username {
            font-weight: bold;
            text-transform: capitalize;
            color: var(--black-600);

            margin-left: 5px;
            white-space: nowrap;
          }
        }

        & > .call-options {
          display: flex;
          gap: 10px;
          color: var(--blue-700);
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .messagepage {
      & > .messagelist {
        width: 100%;

        &.hidden {
          display: none;
        }
      }
      & > .messageContainer.hidden {
        width: 100%;
        display: none;
      }
    }

    .messagepage {
      & > .messageContainer {
        .heading {
          & > .info {
            & > .icon {
              display: flex;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
