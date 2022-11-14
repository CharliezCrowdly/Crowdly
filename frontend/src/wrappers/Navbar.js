import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(20px);
  .navbar {
    display: flex;
    justify-content: space-around;
    padding: 0.5% 0%;
    /* background-color: blue; */
    align-items: center;
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 0;
    left: 0;
    /* z-index: 3;
    width: 100%; */
    & > .nav-content {
      display: flex;
      align-items: center;
      gap: 4px;
      & > .bell-icon {
        font-size: 1.7rem;
      }
    }
  }
  .active {
    border-radius: 50px;
    background-color: var(--blue-600);
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 50%;
    justify-content: center;
    & > .nav-link {
      display: flex;
      align-items: center;
      color: black;
      font-weight: 500;
      padding-inline: 4%;

      padding-block: 0.7%;
      white-space: nowrap;
      & > .icon {
        margin-right: 10px;
        font-size: 1.2rem;
        color: var(--blue-400);
      }
    }
  }
  @media screen and (max-width: 900px) {
    .navbar {
      display: none;
    }
  }
`;

export default Wrapper;
