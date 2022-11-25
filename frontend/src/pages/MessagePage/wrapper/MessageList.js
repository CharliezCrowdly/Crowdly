import styled from "styled-components"


const Wrapper = styled.div`

.messagelst{
    & > .heading{
        font-size: 1.3rem;
        color: var(--blue-900);
        font-family: var(--font-inter);
        margin-bottom: 10px;
        font-weight: 500;
    }

}
  .searchbar {
    margin-bottom:5px;
    display: flex;
    border-radius: 5px;
    background-color: var(--blue-300);
    padding: 2%;
    align-items: center;
    gap: 2%;
    

    & > .icon {
      color: var(--black-500);
      font-size: 0.8rerm;
    }
    & > .search-input {
      outline: none;
      border: none;
      background-color: transparent;
    }

    & > .search-input::placeholder {
      color: var(--black-500);
    }
  }
`;

export default Wrapper