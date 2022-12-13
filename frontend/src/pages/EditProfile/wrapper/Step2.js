import styled from "styled-components";

const Wrapper = styled.div`
  & > label {
    margin-bottom: 5px;
  }

  & > .lstinput {
    & > .listinput {
      & > .icons {
        display: flex;
        flex-direction: row-reverse;
        gap: 30px;
        padding-inline: 5px;
        color: #6e706f;
        font-size: 0.6rem;
      }
    }
  }
`;
export default Wrapper;
