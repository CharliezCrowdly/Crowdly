import styled from "styled-components";

const Wrapper = styled.aside`
  padding: 2%;
  padding-top: 5px;
  width: 300px;

  height: 40px;
  overflow: hidden;
  transform: 1s height;
  background-color: white;
  border-radius: 7px;

  &.active {
    height: max-content;
  }
  & > .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      color: var(--dark-purple);
      font-weight: bold;
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
  & > .enterskill {
    margin-top: 10px;
    width: 100%;
    height: 30px;
    border-radius: 15px;
    padding-left: 15px;
    background-color: transparent;
    margin-bottom: 3px;
  }
  & > .list {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    & > button {
      background-color: #fef93f;
      color: black;
      border: none;
      padding: 2%;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      cursor: pointer;
      & > span {
        margin-left: 4px;
      }
    }
  }

  & > .add-skill {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 2%;
    margin-top: 6px;
    border: none;
    width: 80px;
    background-color: #f2f3ec;
    text-align: start;
    cursor: pointer;
  }
`;

export default Wrapper;
