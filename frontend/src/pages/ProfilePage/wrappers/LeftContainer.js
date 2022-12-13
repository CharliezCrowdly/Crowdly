import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   & > aside{
    & > .info-card{
        width: 300px;
        
        margin-inline: auto;
    }
   }
`;
export default Wrapper;
