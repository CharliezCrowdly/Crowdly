import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-600px);
  left: 20%;
  z-index: 3;
  border-radius: 25px;
  border: 5px solid var(--light-purple);
  display: none;
  transition: 2s;
  .form-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border-radius: 15px;
    justify-content: center;
    padding: 10px 10px;
    & > .icon {
      position: absolute;
      top: 10px;
      right: 10px;
      color: var(--light-purple);
      cursor: pointer;
    }
    & > h1 {
      text-align: center;
    }
    & > label {
      color: var(--black-600);
      font-weight: bold;
      margin-block: 10px;
    }
    & > .bid {
      background: #f0f0f0;
      height: 30px;
      padding-inline: 10px;
      border-radius: 25px;
      border: none;
      &:focus {
        outline: none;
        border: none;
      }
    }
    & > .btn-submit {
      text-align: center;
      width: 130px;
      height: 30px;
      color: white;
      background-color: var(--blue-900);
      border-radius: 25px;
      border: none;
      margin-top: 20px;
      margin-inline: auto;
      cursor: pointer;
    }
  }
  &.active {
    display: flex;
    transform: translateY(50px);
    animation: ismodal 2s forwards;
  }
  @keyframes ismodal {
    0% {
      transform: translateY(-600px);
    }
    100% {
      transform: translateY(50px);
    }
  }
`;
export default Wrapper;
