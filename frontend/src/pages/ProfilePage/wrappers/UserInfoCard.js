import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  position: -webkit-sticky;
  top: 4.2rem;
  z-index: 2;
  .info-card {
    display: flex;

    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
    height: 24rem;
    row-gap: 10px;
    border-radius: 10px;

    & > .userimage {
      position: relative;

      & > label {
        display: block;
        position: absolute;
        top: 10%;
        right: -10%;
        & > .edit {
          background-color: black;
          padding: 9%;
          color: white;
          border-radius: 50px;
          font-size: 1.2rem;
        }
      }

      & > label {
        position: absolute;
        top: 10%;
        right: 19%;
      }

      & > input {
        display: none;
      }

      & > .cancel {
        position: absolute;
        top: 10%;
        right: 5%;
        background-color: black;
        padding: 2%;
        color: white;
        border-radius: 50px;
        font-size: 1.5rem;
      }

      & > .correct {
        position: absolute;
        top: 30%;
        right: -7%;
        background-color: black;
        padding: 2%;
        color: white;
        border-radius: 50px;
        font-size: 1.5rem;
      }
      & > img {
        width: 8rem;
        height: 8rem;

        border-radius: 70px;
      }
    }
    & > .username {
      font-size: 1.2rem;
      color: var(--black-800);
      font-weight: bold;
    }

    & > .userskill {
      text-transform: capitalize;
    }
    & > .edit-profile {
      color: var(--blue-900);
    }
  }
`;
export default Wrapper;
