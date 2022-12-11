import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding-inline: 1%;
  padding-bottom: 1%;
  padding-top: 5px;
  width: 300px;

  height: 40px;
  overflow: hidden;
  transform: 1s height;
  background-color: white;

  &.active {
    height: max-content;
  }
  & > .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & > .icon {
      font-size: 1.5rem;
      cursor: pointer;
      transition: 1s transform;

      &.active {
        transform: rotate(180deg);
      }
    }
  }

  & > .checkbox {
    display: flex;
    align-items: center;
    background-color: #ffc9c6;
    text-transform: capitalize;
    padding: 2%;
    padding-right: 9px;
    width: max-content;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-top: 5px;
    gap: 4px;
    font-size: 0.8rem;
    & > input {
      vertical-align: bottom;
      width: 15px;

      height: 15px;
      background-color: yellow;
      &:checked .checkbox {
        background-color: white;
      }
    }
  }
`;
export default Wrapper;
