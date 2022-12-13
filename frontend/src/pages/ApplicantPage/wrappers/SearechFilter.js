import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 2%;
  gap: 2px;
  align-items: center;
  gap: 2%;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
 
  .search-container {
    width: 100%;

    border-radius: 25px;
    height: 30px;
    padding-left: 5px;
  }
  & > button {
    background-color: var(--blue-1100);
    color: white;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;

    padding: 2%;
    border: none;
  }
`;

export default Wrapper;
