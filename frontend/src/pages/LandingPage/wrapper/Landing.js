import styled from 'styled-components'


const Wrapper = styled.aside`
  .one {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130vh;
    /* min-height: 100vh; */
    width: 100%;
    overflow: hidden;

    background-color: white;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .z-indextop{
    z-index: 10;
  }


  .spline-bg{
    position: absolute;
    top: 0;
    left: 0;

    /* transform: translateY(-150px); */

    /* z-index: 5; */


    
  }

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    animation-name: fadeOut;
    -webkit-animation-duration: 7s;
            animation-duration: 7s; 
            -webkit-animation-fill-mode: both; 
            animation-fill-mode: both; 
  }

  .video-bg-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.17);
  }
  .linear-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      135deg,
      rgba(1, 3, 5, 0.2) 0%,
      rgb(9, 3, 15, 0.2) 100%
    );
    animation: fadeOut 5s cubic-bezier(0, 0.33, 0.07, 1.03) 1.9s forwards;
  }
  nav {
    position: absolute;
    top: 0;
    display: flex;
    padding-top: 20px;

    align-items: center;
    opacity: 0;

    gap: 20px;
    /* z-index: ; */

    animation: fadeEaseIn 3s cubic-bezier(0, 0.33, 0.07, 1.03) 0s forwards;
  }

  .navbar-link {
    display: flex;
    align-items: center;
    gap: 90px;
    font-weight: bold;
    color: black;
    font-weight: bolder;
    z-index: 7 !important;
  }
  .d-flex {
    display: flex;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-weight: lighter;

    & > span{
      & + span{
        font-weight: bolder;
      }
    }
  }
  .circle-border {
    width: 53px;
    height: 53px;
    text-align: center;
    display: flex;
    box-shadow: 0px 0px 21px rgb(0 0 0 / 26%);

    justify-content: center;
    align-items: center;
    font-weight: 900;
    margin: 0 auto;

    border-radius: 50px;
    border: 1.7px solid white;
  }
  .XL-text {
    position: absolute;
    text-transform: uppercase;
    opacity: 0;

    text-align: center;
    color: black;
    /* transform: translateY(-50px); */
    font-family: "MADE Soulmaze Outline Regular";
    font-size: min(10vw, 85px);
    

    line-height: min(10vw, 81px);
    text-shadow: 0px 0px 21px rgb(255 255 255 / 65%);
    z-index: 1;
    animation: fadeIn 2s ease-in 0s forwards;
  }
  .L-text {
    position: absolute;
    font-family: "MADE Soulmaze Outline Regular";

    text-transform: uppercase;
    text-align: center;

    font-size: min(10vw, 85px);

    line-height: min(10vw, 81px);

    color: transparent;
    -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.497);

    transform: translateY(-25px);
  }
  .fab {
    font-size: 24px;
    font-weight: lighter;
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    z-index: 2;
  }
  .M-text {
    transform: rotate(90deg);
    transform-origin: 0 0;
    font-size: 0.7rem;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .container-center {
    width: 80vw;
    margin: 0 auto;
    color: black;

    display: flex;
    justify-content: space-between;
  }
  .GetStarted {
    background-color: rgba(0 0 0 0.5);
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    border-color: black;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 32px 32px 5px rgb(4 4 4 / 42%);
    padding: 12px 75px 12px 75px;
    position: absolute;
    margin-top: 190px;
    backdrop-filter: blur(200px);
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
  }
  .GetStarted:hover {
    background-image: linear-gradient(
      135deg,
      rgba(6, 147, 227, 0.2) 0%,
      rgb(155, 81, 224, 0.2) 100%
    );
    background-color: transparent;
    text-transform: uppercase;
  }
  .text-M {
    position: absolute;
    margin-top: 90px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #ab89c7;
    letter-spacing: 4px;
    font-family: "Kanit", sans-serif;
  }

  .featured {
    position: absolute;
    bottom: 90px;
    font-family: "MADE Soulmaze Outline Regular";

    left: 10vw;
    font-size: 2rem;
    color: black;

    text-transform: uppercase;
    animation: fadeIn 2s ease-in 0s forwards;
  }
  .featured::after {
    content: "Featured";
    font-family: inherit;

    position: absolute;
    bottom: -25px;
    left: 0;
    font-size: 2rem;
    color: transparent;
    -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.497);

    text-transform: uppercase;
  }

  .two {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: white;
    padding: 9%;
    padding-top: 2%;
    column-gap: 2%;
    row-gap: 2%;
  }

  .two > img {
    max-height: 172px;
  }

  .three {
    background-color: var(--white-color);
    padding-right: 4%;
    display: flex;
    align-items: center;
    justify-content: end;

    & > span {
      position: absolute;
      margin-right: clamp(10px, 10%, 47px);
      text-transform: uppercase;
      font-weight: lighter;
      font-family: "MADE Soulmaze Outline Regular";
    }
    & > svg {
      margin-left: auto;
      display: block;

      height: 150px;
      letter-spacing: 0.52em;

      & > text {
        transform-origin: 50% 50%;
        animation: rotate 10s linear infinite;
      }
    }
  }

  @keyframes rotate {
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(-360deg);
      }
    }

    .four {
    background-color: blue;

    background-color: var(--white-color);
    padding-inline: 10%;

    & > .Patners {
      padding-top: 10px;
      font-family: "MADE Soulmaze Outline Regular";
      font-size: 2rem;
      position: relative;
      bottom: -10px;

      &::after {
        content: "patners with";
        font-family: inherit;

        position: relative;
        bottom: -25px;
        left: 0;
        font-size: 2rem;
        color: transparent;
        -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.497);

        text-transform: uppercase;
      }

      &::before {
        content: "patners with";
        font-family: inherit;
        color: black;

        position: absolute;
        bottom: -15px;
        left: 0;
        font-size: 2rem;

        text-transform: uppercase;
      }
    }

    .line-left {
      background-color: white;
      height: 1px;
      width: 100%;
      margin-top: 40px;
    }
    .line-right {
      background-color: white;
      height: 1px;
      width: 100%;
      margin-bottom: 10px;
    }

    .getstarted-btn {
      margin-top: 20px;
      white-space: nowrap;
      justify-content: center;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      word-wrap: normal;
      font-weight: bolder;

      align-items: center;

    

      width: clamp(90px, 50%, 270px);
      text-transform: uppercase;
      color: white;
      background-color: transparent;

      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #00d8ff;
      border-radius: 5px 5px 5px 5px;
      box-shadow: 0px 32px 32px 5px rgb(4 4 4 / 42%);
      padding: 12px 87px 12px 87px;
    }

    .million {
      color: #00d8ff;
    }

    .brands {
      background-color: var(--white-color);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
    }
  }

  .five {
    background-color: white;
    padding-inline: 10%;
    padding-top: 5%;
    /* background-color: #ab89c7; */
    height: max-content;
    overflow: hidden;

    & > .five-p {
      font-size: clamp(0.4rem , calc(0.4rem + 2vw), 21px);
      line-height: clamp(1.5rem,calc(1.5rem + 1vw),40px);
      font-style: inherit;
      padding-right: 5%;
      padding-top: 30px;
    }

    & > .bigimg-left {
      width: 70%;
      max-height: 470px;
      margin-block: 30px;
    }
    & > .bigimg-right {
      width: 70%;
      max-height: 470px;
      text-align: end;
      float: right;
    }

    & > .five-content {
      display: flex;
      align-items: center;

      gap: 10px;

      .circle-b {
        min-width: 53px;
        min-height: 53px;

        display: flex;
        box-shadow: 0px 0px 21px rgb(0 0 0 / 26%);

        justify-content: center;
        align-items: center;
        font-weight: 900;

        border-radius: 50px;
        border: 1.7px solid var(--black-color);
      }

      & > .Why {
        font-family: "MADE Soulmaze Outline Regular";
        font-size: clamp(1.5rem,calc(0.3rem + 2vw),2rem);
        position: relative;
        top: -20px;
        color: wheat;
        
      }

      &>.Why::before {
        content: "Why choose crowdly";
        font-size: inherit !important;
        white-space: nowrap;
        width: 100%;
        font-family: inherit;
        color: black;
        word-break: keep-all;

        position: absolute;
        bottom: -15px;
        left: 0;
        font-size: 2rem;

        text-transform: uppercase;
      }

      &>.Why::after {
        content: "Why choose crowdly";
        font-size: inherit !important;
        white-space: nowrap;

        position: relative;
        bottom: -25px;
        left: 0;
        font-size: 2rem;
        color: transparent;
        -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.497);

        text-transform: uppercase;
      }
    }
  }

  .six {
    background-color: var(--white-color);
    padding-inline: 10%;
    position: relative;
    padding-block: 80px;

    & > .barcode {
      width: 70px;
    }

    & > .about {
      font-family: "MADE Soulmaze Outline Regular";
      font-size: 2rem;
      position: relative;
      color: wheat;
      margin-bottom: 30px;

      &::before {
        content: "about";
        white-space: nowrap;
        width: 100%;
        font-family: inherit;
        color: black;
        word-break: keep-all;

        font-size: 2rem;

        text-transform: uppercase;
      }

      &::after{
        content: "about";
        font-family: inherit;
        white-space: nowrap;
        position: absolute;
        left: 0;
        top: 20px;

        
        font-size: 2rem;
        color: transparent;
        -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.497);

        text-transform: uppercase;

      }
    }

    &>.grid-3{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      row-gap: 20px;
      padding-bottom: 40px;
      

      

      &>.bnumber{
        color: #00d8ff;
        font-family: "MADE Soulmaze Outline Regular";
        font-size: clamp(25px, calc(25px + 3vw),4rem) ;
      }
      &>.mtext{
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.662);
      }
    }

    & > .six-p {
      font-size: clamp(0.4rem , calc(0.4rem + 2vw), 21px);
      line-height: 40px;
      font-style: inherit;
      padding-right: 5%;
      padding-top: 30px;
    }

  }

  .seven{
    position: relative;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    /* min-height: 100vh; */
    width: 100%;
    overflow: hidden;

   
    background-size: cover;
    background-position: center;

    &>.footer-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
   


    }

    &>.linear-gradient{
      height: 100%;
      width: 100%;
      z-index: 2;
      background-image: linear-gradient(
      135deg,
      rgb(1, 3, 0.2) 0%,
      rgb(9, 3, 15, 0.3) 100%
      ) !important;
    }

    &>.quote{
      padding: 10%;
      position: absolute;
      text-align: center;
      font-family: "MADE Soulmaze Outline Regular";
      color: #D1D3F2;
      font-size: clamp(1rem, calc(1rem + 2vw),2.5rem) ;
      z-index: 3;
        text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.662);


    }
  }
  .footer{
    background-color: var(--white-color);
    padding-inline: 10%;
    padding-block: 7%;
    text-align: center;
    
    &>.footer-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 50px;

      & .footer-title{
        font-weight: bold;
        font-size:0.8rem;
        margin-top: 20px;
      text-align: end;
  
      }
  
      & .footer-text{
        font-weight: normal;
        font-size:0.8rem;
        margin-top: 5px;
        color:black;
      text-align: end;
  
      }
    }

    &> .line-right {
      background-color: white;
      height: 1px;
      width: 100%;
      margin-bottom: 10px;
    }

  }

    @media screen and (max-width: 700px) {
      .two {
        grid-template-columns: repeat(2, 1fr);
      }
      .two > img {
        max-height: 104px;
      }
    }




`

export default Wrapper