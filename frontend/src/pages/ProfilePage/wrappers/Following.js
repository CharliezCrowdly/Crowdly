import styled from "styled-components";
const Wrapper = styled.div`
  & > .signalfollow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 1%;

 

      & > img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }

      & > button{
        padding: 1%;
        background-color: var(--blue-1100);
        color:white;
        font-weight: bold;
        text-transform: capitalize;
        border: none;
        cursor: pointer;
      }
    
  }
`;
export default Wrapper;
