import styled from "styled-components";

const Wrapper = styled.div`
  .feedsearcharea {
    display: flex;
    flex-direction: column;
    gap: 2%;
    .feedsearch {
      display: flex;
      align-items: center;
      border-radius: 15px;
      padding: 2%;

      & > .searchbar {
        width: 100%;
        padding-left: 4%;
        outline: none;
        border: none;
        height: 100%;
        background-color: transparent;
        text-transform: capitalize;
      }

      & > .icon {
        color: var(--blue-700);
        font-size: 1.5rem;
        cursor: pointer;
      }

      & > .fileupload {
        width: 32px;

        overflow: hidden;
        position: relative;

        & > .icon {
          position: absolute;
          top: 0;
          left: 0;
          color: var(--blue-700);
          font-size: 1.5rem;
          z-index: -1;
        }

        & > .uploadfile {
          opacity: 0;
          z-index: 2;
          cursor: pointer;
        }
      }

      & > .btn-send {
        outline: none;
        border: none;
        color: var(--black-color);
        font-weight: bold;
        font-family: var(--inter-font);
        margin-left: 2%;
        font-size: 0.9rem;
        cursor: pointer;
        background-color: transparent;

        &:disabled{
          cursor:progress;
        }
      }
    }

    & > .location-input {
      width: 100%;
      margin-top: 10px;
      padding-left: 4%;
      outline: none;
      border: none;
      height: 100%;
      padding: 2%;
      border-radius: 10px;
    }

    & > .imagefield {
      & > .audio-select {
        padding: 1%;
        margin-top: 0.4rem;

        display: flex;
        border-radius: 8px;
        gap: 4%;
        width: 200px;
        background-color: var(--blue-1000);
        align-items: center;
        color: var(--white-color);

        & > .icon {
          font-size: 1.5rem;
        }
      }

      & > .img-select {
        padding: 1%;
        margin-top: 0.4rem;

        display: flex;
        border-radius: 8px;
        gap: 4%;
        width: 200px;
        background-color: var(--light-red);
        align-items: center;
        color: var(--white-color);
        font-size: 0.9rem;

        & > img {
          width: 30px;
          height: 30px;
          border-radius: 7px;
        }
      }

      & > .video-select {
        padding: 1%;
        margin-top: 0.4rem;

        display: flex;
        border-radius: 8px;
        gap: 4%;
        width: 200px;
        background-color: var(--blue-1000);
        align-items: center;
        color: var(--white-color);

        & > .icon {
          font-size: 1.5rem;
        }
      }

      & > .file-select {
        padding: 1%;
        margin-top: 0.4rem;

        display: flex;
        border-radius: 8px;
        gap: 4%;
        width: 200px;
        background-color: var(--light-green);
        align-items: center;
        color: var(--white-color);

        & > .icon {
          font-size: 1.5rem;
          color: var(--blue-700);
        }
      }
    }
  }
`;

export default Wrapper;
