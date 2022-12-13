import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 2%;
  gap: 2px;
 border: 1px solid black;
  .search-container {
    margin-bottom: 30px;
    width: 100%;
   
    border-radius: 25px;
    height: 30px;
    padding-left: 5px;
  }
  & > button {
    position: absolute;
    bottom: 2%;
    right: 2%;
    background-color: var(--blue-1100);
    color: white;
    width: 100px;
    padding: 2%;
    border: none;
  }
`;

export default Wrapper;
