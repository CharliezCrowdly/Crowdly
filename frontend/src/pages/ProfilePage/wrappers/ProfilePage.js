import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding-inline: 5%;

  .leftcontainer {
    width: 25%;
  }

  .rightcontainer {
    width: 75%;
    height: 100%;
    background: rgba(255, 255, 255, 0.61);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 90vh;
  }

  @media screen and (max-width: 1000px) {
    padding: 1%;
    .leftcontainer {
      display: none;
    }

    .rightcontainer{
      width: 100%;
    }
  }
`;
export default Wrapper;
