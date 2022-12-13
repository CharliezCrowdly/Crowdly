import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  padding-inline: 5%;
  gap: 5%;

  & > .left-container {
    position: sticky;
  }

  & > .right-container {
    width: 100%;
    background-color: white;
    border-radius: 15px;
    min-height: 90vh;
    padding: 2%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > .applicants {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
export default Wrapper;
