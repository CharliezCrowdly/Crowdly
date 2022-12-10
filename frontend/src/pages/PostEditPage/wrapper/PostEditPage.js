import styled from "styled-components";

const Wrapper = styled.div`
  & > .alert {
    max-width: 500px;
    margin: 0 auto;
  }
  .card {
    max-width: 500px;
    margin: 0 auto;
    height: 600px;

    &.active .card-content {
      transform: rotateY(0.5turn);
    }

    & > .card-content {
      height: 100%;
      width: 100%;
      transition: transform 3s;
      // background: pink;
      transform-style: preserve-3d;

      & > .card-back {
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transform: rotateY(0.5turn);
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        height: 100%;
        width: 100%;
        border-radius: 15px;

        & > .card-body {
          transform: translateZ(6rem);
          font-size: 1.5rem;
          line-height: 1.6;
        }
      }

      & > .card-front {
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 2%;

        border-radius: 15px;
        box-shadow: inset 20px 20px 60px #bebebe,
          inset -20px -20px 60px inset -20px -20px 60px
            rgba(255, 255, 255, 0.61);

        border: 2px solid var(--blue-700);

        .edit-img {
          position: relative;
          transform: translateZ(200px);

          & > .fileupload {
            width: 32px;
            height: 32px;
            overflow: hidden;
            position: absolute;
            top: 16%;
            left: 5%;

            & > .icon {
              color: white;
              font-size: 1.5rem;
              z-index: 4;
              position: absolute;
              top: 0;
              left: 0;
            }

            & > .uploadfile {
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              z-index: 6 !important;
              cursor: pointer;
            }
          }

          & > label {
            font-weight: bold;
            color: black;
          }
          & > img {
            height: 300px;
            object-fit: cover;
            margin: 0 auto;
            padding: 2%;
            border-radius: 15px;
            transition: 2s;
          }

          & > video {
            height: 300px;
            object-fit: cover;
            margin: 0 auto;
            padding: 2%;
            border-radius: 15px;
            transition: 2s;
            width: 100%;
          }

          & > .icon {
            position: absolute;
            top: 15%;
            right: 5%;
            font-weight: bolder;
            color: white;
            cursor: pointer;
          }

          &.active {
            position: absolute;
            top: 0;
            left: 0;
            height: 590px;
            width: 100%;

            & > .fileupload {
              position: absolute;
              top: 5%;
              left: 5%;
            }
            & > .icon {
              position: absolute;
              right: 5%;
              top: 5%;
              z-index: 2;
            }

            & > img {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 2;

              &.active {
                height: 100%;
                width: 100%;

                object-fit: cover;
              }
            }

            & > video {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 2;

              &.active {
                height: 100%;
                width: 100%;

                object-fit: cover;
              }
            }
          }
        }
        & > .btn-submit {
          width: 150px;
          border-radius: 25px;
          height: 30px;
          margin: 0 auto;
          background-color: var(--blue-700);
          color: white;
          font-weight: bold;
          border: none;
          transform: translateZ(100px);
          cursor: pointer;
        }

        & > h3 {
          margin: 0 auto;
          font-size: 1.5rem;
          text-transform: capitalize;
          color: var(--blue-700);
          transform: translateZ(200px);
        }
      }
    }
  }

  /* @keyframes fullscreen {
    to {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  } */
`;
export default Wrapper;
