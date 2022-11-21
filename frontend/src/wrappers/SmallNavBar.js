import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 900px) {
    display: none;
  }
  .smallsidebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: max-content;
    padding: 2%;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 4;
    opacity: 0;
    /* transition: var(--transition); */
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    height: 95vh;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    z-index: 5;
    color: red;
    cursor: pointer;
  }

  .nav-links {
    width: 100%;
    & > .nav-link {
      display: flex;
      align-items: center;
      color: black;
      padding: 1rem 0;
      text-transform: capitalize;
      font-weight: bold;
      text-align: start;
      justify-content: center;
      width: 100%;
      & > .icon {
        margin-right: 10px;
        font-size: 1.9rem;
        color: var(--blue-400);
      }
    }
  }
  .nav-link:hover {
    /* color: var(--grey-900); */
  }
  .nav-link:hover .icon {
    /* color: var(--primary-500); */
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    /* transition: var(--transition); */
  }
  .active {
    background-color: var(--blue-600);
  }
  .active .icon {
    color: var(--blue-1000);
  }
`;

export default Wrapper;
