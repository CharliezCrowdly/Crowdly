import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(400 + 2vw);
  max-width: 530px;
  margin-inline: auto;
  margin-top: 90px;
  padding-bottom: 30px;
  box-shadow: 1px 8px 28px 0px rgba(146, 186, 191, 0.75);
  -webkit-box-shadow: 1px 8px 28px 0px rgba(146, 186, 191, 0.75);
  -moz-box-shadow: 1px 8px 28px 0px rgba(146, 186, 191, 0.75);
  padding-inline: 30px;
  border-radius:13px;

  & > .card {
    height: 250px;
    transform: translateY(-90px);
    max-width: 440px;
    width: calc(400px + 2.3vw);
    position: absolute;
    margin-inline: auto;
    margin-left: 15px;

    & > .chip {
      position: absolute;
      top: 5%;
      left: 3%;
      width: 55px;
      height: 35px;

      z-index: 2;
    }
    & > .cardimg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 13px;
    }
    & > p {
      position: absolute;
      top: 50%;
      left: 4%;
      color: white;
      font-weight: bold;
      font-size: 1.4rem;
    }

    & > .holdername {
      position: absolute;
      bottom: 4%;
      left: 3%;
      color: white;
      & > p {
        font-size: 0.8rem;
      }
    }

    & > .monthn {
      position: absolute;
      bottom: 4%;
      right: 3%;
      color: white;
      & > p {
        font-size: 0.8rem;
      }
    }
  }

  & > form {
    padding-top: 200px;
    & > .d-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }

    & > .btn-submit {
      display: flex;
      width: 100%;
      font-weight: bold;
      margin-top: 10px;
      background-color: var(--blue-1100);
      border: none;
      height: 40px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
  }
`;
export default Wrapper;
