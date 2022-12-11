import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80vh;
  border-radius: 15px;
  margin-inline: 5%;
  & > .left-content {
    padding: 2%;
    display: flex;
    flex-direction: column;

    & > .info {
      & > .backoptions {
        padding-block: 2%;
        display: flex;
        gap: 10px;
        align-items: center;
        & > .icon {
          font-size: 2.5rem;
          color: var(--blue-1000);
        }

        & > h6 {
          color: var(--l-p-color);
        }
      }
    }
    & > .img-container {
      margin-top: auto;

      width: 100%;
      height: 470px;

      display: flex;
      justify-content: center;
      align-items: center;

      & > img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        object-position: center;
      }
    }
  }

  & > .right-container {
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > form {
      width: 100%;

      & > .info {
        display: flex;
        justify-content: space-between;
      }
      & > h5 {
        padding-block: 20px;
      }

      label {
        margin-block: 5px;
      }

      & > .payment-method {
        display: flex;
        align-items: flex-end;
        width: 100%;

        border: 2px solid #c4def4;
        height: 50px;
        margin-top: 5px;
        overflow: hidden;
        background-color: white;

        & > input {
          height: 50px;

          padding-left: 5px;
          border: none;
          width: 100%;

          &:focus .payment-method {
            border: 3px solid #539fdf;
            outline: none;
          }

          &:focus {
            outline: none;
            border: none;
          }
        }

        & > .icon {
          font-size: 3rem;
          color: var(--blue-1000);
          margin-top: auto;
        }
      }
    }
    & > button {
      background-color: var(--blue-1000);
      color: white;
      font-weight: bolder;
      height: 50px;
      padding: 2%;
      width: 100%;
      border: none;
      margin-top: 40px;

      text-align: center;
    }
  }
`;
export default Wrapper;
