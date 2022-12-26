import styled from "styled-components";

const Wrapper = styled.div`
  padding-inline: 2%;
  padding-block: 2%;
  padding-top: 5px;
  width: 300px;

  height: 40px;
  overflow: hidden;
  transform: 1s height;
  background-color: white;
  border-radius: 7px;
  margin-block: 10px;

  &.active {
    height: max-content;
  }
  & > .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    & > p {
      color: var(--dark-purple);
      font-weight: bold;
      text-transform: capitalize;
    }

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
