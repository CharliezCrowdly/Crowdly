import styled from "styled-components"


const Wrapper = styled.div`
position: relative;
height: 100%;
.search-area {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 25px;
  
  
    width: 100%;
    gap: 2%;
    & > .searchbar {
      padding: 2%;
      width: 100%;
      background-color: white;
      box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 21px;

      & > .search-input {
        border: none;
        outline: none;
        width: 100%;
      }
    }

    & > .icon{
        width: 50px;
        height: 50px;
        padding: 1%;
        border-radius: 50%;
        font-size: 0.8rem;
        color: var(--blue-1200);
        background-color: var(--light-blue-500);
    }
  }
`;

export default Wrapper;