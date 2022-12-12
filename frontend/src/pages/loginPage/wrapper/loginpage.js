import styled from "styled-components";

const Wrapper = styled.div`
  .login-container {
    display: flex;
    height: 100vh;
    background-color: white;
    overflow: hidden;
    justify-content: space-between;

    & > .back-arrow {
      position: absolute;
      top: 5%;
      left: 5%;
      font-size: 2.5rem;
    }
  }

  .login-heading {
    font-size: 3rem;
  }

  .form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    justify-content: center;

    padding: 10%;
    gap: 20px;

    & > .btn-submit {
      margin-top: 40px;
      width: 100%;
      padding: 2%;

      border: none;
      color: white;
      font-weight: bolder;
      background-color: #5555ff;
      cursor: pointer;
    }

    & > .toggle-account {
      text-transform: capitalize;
      color: var(--black-500);
      align-self: flex-end;
      cursor: pointer;
    }
  }

  .image-container {
    width: 100%;
    background-color: #5555ff;
    position: relative;

    & > .login-info {
      position: absolute;
      top: 20%;
      left: 40%;
      z-index: 2;
      font-size: min(70px, calc(20px + 4vw));
      color: white;
      text-align: center;
    }

    & > img {
      margin-top: 200px;
      width: 50%;
      object-fit: contain;
      transform: translateX(-20%);
      animation: bounce infinite 15.2s forwards;
    }
  }

  @keyframes hoverd {
    0% {
      transform: translateY(-100px);
    }

    50% {
      transform: translateY(-50px);
    }

    100% {
      transform: translateY(-100px);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(-40%);
    }
    40% {
      transform: translateY(-30px) translateX(-40%);
    }
    60% {
      transform: translateY(-15px) translateX(-40%);
    }
  }

  @media screen and (max-width: 700px) {
    .image-container {
      display: none;
    }
  }
`;
export default Wrapper;
