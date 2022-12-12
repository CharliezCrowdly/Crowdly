import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-block: 2%;
  border-radius: 25px;
 

  .caret {
    border: 0.6rem solid transparent;
    border-top-color: #777;
    translate: 0.25%;
    position: absolute;
    top: 16px;
    right: 5px;
  }

  .singleselectinput {
    display: block;

    color: var(--black-600);
    font-size: 0.9rem;
    text-transform: capitalize;
    

    cursor: pointer;

    & > .usertype{
        padding: 2%;
    }

    & > .divider {
      border-bottom: 1px solid var(--primary-color);
      margin-block: 10px;
    }

    & > .options {
      & > .option {
        padding: 2%;
        border: 0.5px solid var(--light-blue-500);

        &:hover{
            background-color: var(--primary-color);
            color: white;
        }
      }
    }
  }
`;

export default Wrapper