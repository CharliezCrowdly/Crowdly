import styled from "styled-components";

const Wrapper = styled.aside`
  .YourWorkPage {
    display: flex;

    width: 100%;

    column-gap: 5%;

    & > .middle-container {
      width: 100%;
    }

    & > .right-container {
      width: 35%;
    }
  }

  @media screen and (max-width: 640px) {
    .right-container {
      display: none;
    }

    .YourWorkPage {
      & > .middle-container {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
