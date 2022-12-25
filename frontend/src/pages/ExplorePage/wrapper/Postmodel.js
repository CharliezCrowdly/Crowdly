import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--transparent-black);
  margin: 0 auto;
  z-index: 7;
  overflow: hidden;

  .slider {
    height: 100%;

    & > .btn-close {
      position: absolute;
      top: 5%;
      right: 5%;
      color: whitesmoke;
      font-size: 2em;
      cursor: pointer;
    }
    & > .slider-icons {
      & > .prev-icon {
        position: absolute;
        left: 2%;

        top: 50%;
        font-size: 1.7em;
        color: whitesmoke;
        cursor: pointer;
      }

      & > .next-icon {
        position: absolute;
        right: 2%;

        top: 50%;
        font-size: 1.7em;
        color: whitesmoke;
        cursor: pointer;
      }
    }
    .slider-content {
      position: relative;
      top: 5%;
      height: 90%;
      width: 70%;
      margin: auto auto;
      z-index: 7;

      & > .slider-items {
        background-color: var(--white-color);
        height: 100%;
        & > .slide-model {
          height: 100%;
          display: flex;

          & > .post-img {
            width: 50%;
            height: 100%;
            object-fit: cover;
          }

          & > .comment-section {
            width: 100%;
          

            & > .user-content {
              display: flex;
              justify-content: space-between;
              width: 100%;
              align-items: center;
              height: 50px;
              padding-inline: 2%;

              & > .user-info {
                display: flex;
                align-items: center;
                height: 50px;

                & > .post-info {
                  display: flex;
                  flex-direction: column;
                  font-size: 0;
                  line-height: 0.9rem;

                  margin-left: 10px;
                  & > .username {
                    font-weight: bold;
                    font-size: 1rem;
                  }
                  & > .location {
                    font-size: 1rem;
                    color: var(--black-300);
                  }
                }
              }
            }

            & > .comments-lst {
              height: 490px;
              overflow: hidden;
              overflow-y: scroll;
              scrollbar-width: none;
              -ms-overflow-style: none;
         

              &::-webkit-scrollbar {
                width: 0;
                height: 0;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {

    & > .slider{

      & > .slider-content{
        & > .slider-items{

          & > .slide-model{

            display: flex;
            flex-direction: column;

            & > .post-img{
              width: 100%;
              height: 300px;
            }

            & > .comment-section{
              
              & .comments-lst{
                height: 400px;
                overflow: hidden;
                  overflow-y: scroll;
              }
            }
          }
        }
      }

    }
    
  }
`;

export default Wrapper;
