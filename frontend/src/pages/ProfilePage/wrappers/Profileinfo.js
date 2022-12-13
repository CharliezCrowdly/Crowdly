import styled from "styled-components";

const Wrapper = styled.div`

.info{
    margin: 4%;
    padding: 10%;
    padding-inline: 15%;
    
    .shortinfo {
      display: flex;
      justify-content: center;
  
      & > .profile-pic-sm {
        width: 70px;
        height: 70px;
      }
  
      & > .counts {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        gap: 7px;
  
        & > .header {
          font-weight: bold;
          text-transform: capitalize;
          color: var(--blue-900);
        }
  
        & > .sub-header{
          color: var(--black-500);
        }
      }
    }

    & > h2{
        margin-block: 5%;

        
    }


}
`;
export default Wrapper;
