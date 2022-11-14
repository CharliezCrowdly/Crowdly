import styled from "styled-components";

const Wrapper = styled.aside`
  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    .logo-name {
      font-size: 1.2rem;
      color: var(--blue-700);
      font-weight: bolder;
    }
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-weight: bolder;
    color: var(--blue-700);
  }
  .circle-border {
    width: 53px;
    height: 53px;
    text-align: center;
    display: flex;
    box-shadow: 0px 0px 21px rgb(255 255 255 / 26%);
    justify-content: center;
    align-items: center;
    font-weight: 900;
    margin: 0 auto;
    border-radius: 50px;
    border: 1.7px solid var(--blue-700);
  }
`;

export default Wrapper;
