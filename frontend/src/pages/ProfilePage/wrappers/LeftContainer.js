import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: sticky;
  position: -webkit-sticky;
  top: 4.2rem;
  z-index: 2;
  & > aside {
    & > .info-card {
      width: 300px;

      margin-inline: auto;
    }
  }
`;
export default Wrapper;
