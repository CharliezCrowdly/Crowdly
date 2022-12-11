import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  & .search-container {
    display: flex;
    width: 100%;

    padding: 1%;
    padding-left: 2%;
    margin-bottom: 10px;

    border-radius: 25px;

    & > .searchbar {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      margin-left: 10px;
    }

    & > .btn-post {
      width: 100px;
      color: var(--blue-900);
      background-color: transparent;
      border: none;
      font-size: 1.1em;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  .search_result {
    position: absolute;
    top: 50px;
    left: 0;
    border-radius: 10px;

    width: 100%;

    background-color: white;
    z-index: 5;
    color: black;

    & > .users {
      & > .search-content {
        display: flex;
        margin-block: 5px;
        gap: 4%;
        margin: 10px;

        & > .search-info {
          display: flex;
          flex-direction: column;
          gap: 2%;
          color: var(--black-500);
          & > .name {
            font-size: 0.6em;
          }
        }
      }
    }
  }
`;
export default Wrapper;
