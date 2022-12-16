import styled from "styled-components"

const Wrapper = styled.div`
  & > .educationlst {
    & > .education {
      backdrop-filter: blur(50px);
      background: rgba(255, 255, 255, 0.61);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }
  }
  & > .information {
    width: 100%;
    & > .skills {
      margin-top: 20px;
      & > .list {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        & > button {
          background-color: #fef93f;
          color: black;
          border: none;
          min-width: 70px;
          padding: 1%;
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
          cursor: pointer;
          & > span {
            margin-left: 4px;
          }
        }
      }
    }
  }
`;
export default Wrapper;