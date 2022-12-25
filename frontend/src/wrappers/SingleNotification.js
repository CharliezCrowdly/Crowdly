import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  max-width: 405px;
  padding-block: 6px;
  align-items: center;
  background-color: white;
  border-radius: 0 !important;
  justify-content: space-between;

  cursor: pointer;
  &:hover {
    background-color: var(--grey-50);
  }
  /* &.active {
    background-color: var(--blue-400);
    color: white;
    &:hover {
      background-color: var(--blue-500);
    }
    & > .content {
      color: var(--black-550);
      & > span {
        color: black;
      }
    }
  } */

  & > .dot {
    font-size: 0.5rem;
    margin-inline: 5px;
    color: var(--light-blue-600);
    height: 100%;

    &.active {
      visibility: hidden;
    }
  }

  & > img {
    width: 50px;
    height: 50px;
  }

  & > .content {
    font-size: 0.8rem;
    line-height: 15px;
    color: var(--black-550);
    width: 100%;
    margin-left: 4px;
    & > span {
      font-weight: bold;
      padding-right: 5px;
      text-transform: capitalize;
    }
  }

  & > .option {
    padding-right: 5px;
    margin-left: auto;
    position: relative;

    & > p {
      font-size: 0.7rem;
    }

    & > .options {
      position: absolute;
      display: flex;
      width: 100px;
      align-items: center;
      transform: translateX(-85px);
      border: 1px solid black;
      gap: 5px;
      background-color: white;
      &:hover {
        background-color: var(--grey-50);
      }
    }
  }
`;
export default Wrapper;
