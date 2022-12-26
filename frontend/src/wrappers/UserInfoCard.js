import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  position: -webkit-sticky;
  top: 4.2rem;
  z-index: 2;
  .info-card {
    display: flex;

    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
    height: 24rem;
    row-gap: 10px;
    border-radius: 10px;

    & > .userimage {
      & > img {
        object-fit: cover;
        width: 8rem;
        height: 8rem;

        border-radius: 70px;
      }
    }
    & > .username {
      font-size: 1.2rem;
      color: var(--black-800);
      font-weight: bold;
    }
    & > .edit-profile {
      color: var(--blue-900);
    }
  }
`;
export default Wrapper;
