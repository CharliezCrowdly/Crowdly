import styled from "styled-components";

const Wrapper = styled.div`
  height: 270px;
  overflow-y: scroll;
  border-radius: 15px;
  padding: 2% 4%;
  margin-top: 20px;
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h4 {
      font-size: 1.2rem;
      color: var(--blue-1100);
    }

    & > .add {
      cursor: pointer;
      font-weight: bolder;
      font-size: 29px;
      color: var(--blue-1100);
    }
  }
  & > input {
    width: 100%;
    background-color: transparent;
    border: none;
    border: 0.1px solid var(--light-purple);
    margin-top: 7px;
    border-radius: 25px;
    padding: 3% 4%;
    margin-bottom: 9px;

    &:focus {
    }
  }

  & > .lists {
    margin-top: 4px;

    display: flex;
    justify-content: space-between;
    /* font: var(--sticky-font); */
    text-transform: capitalize;

    & > span {
      cursor: pointer;
    }

    & > .done {
      text-decoration-line: line-through;
      text-decoration-color: var(--blue-1100);
    }

    & > .delete {
      color: var(--black-550);
    }
  }
`;
export default Wrapper;
