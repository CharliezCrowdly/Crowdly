import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  height: 80vh;
  position: relative;

  & > .icon {
    position: absolute;
    top: 2%;
    font-size: 2.5rem;
    left: 5%;
    color: var(--dark-purple);
    cursor: pointer;
  }

  & > .form {
    padding: 2%;
    width: 400px;
    margin: 0 auto;
    border: 1px solid var(--dark-purple);
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    & > .d-none {
      display: none;
    }

    & > .btn-submit {
      padding: 2%;
      width: 100px;
      height: 30px;
      margin: 0 auto;
      margin-top: 10px;
      border-radius: 25px;
      cursor: pointer;
      color: var(--dark-purple);
      border: 1px solid var(--dark-purple);
      text-align: center;
      align-self: center;
      justify-self: center;
    }

    & > .ottpsection {
      & > .ottp {
        display: flex;
        width: 100%;
        justify-content: space-between;
        & > .ott {
          width: 50px;
          height: 60px;
          font-size: 1.5rem;
          text-align: center;
          margin-top: 10px;

          border: 2px solid #c4def4;

          &:focus {
            border: 3px solid #539fdf;
            outline: none;
          }
        }
      }
    }
  }
`;
export default Wrapper;
