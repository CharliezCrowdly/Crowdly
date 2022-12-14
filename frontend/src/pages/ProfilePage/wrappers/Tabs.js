import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  background-color: var(--light-blue-200);
  padding: 1%;
  border-radius: 10px;
  margin-block: 15px;
  flex-wrap: wrap;

  & > .btn-tab {
    width: max-content;
    min-width: 120px;

   

    white-space: nowrap;

    text-align: center;
    padding: 0.5%;
    padding-inline: 2%;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--blue-900);
    &.active {
      border-radius: 25px;
      border: 2px solid var(--blue-900);
    }
  }
`;
export default Wrapper;
