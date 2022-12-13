import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .coverimg {
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
  }

  & > .btn-edit {
    position: absolute;
    bottom: 9%;
    right: 3%;
    background-color: rgba(255, 255, 255, 0.61);
    backdrop-filter: blur(25px);
    padding-inline: 2%;
    padding-block: 1%;
    border-radius: 25px;
    border: none;
  }
`;
export default Wrapper;
