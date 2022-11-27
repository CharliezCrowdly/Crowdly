import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

import Wrapper from "./wrapper/Landing";

import miles from "../../assets/images/miles.jpg";
import wolverine from "../../assets/images/wolverine0.jpg";
import ironfist from "../../assets/images/ironfist.jpg";
import scarlet from "../../assets/images/scarlet.jpg";
import hulk from "../../assets/images/hulk.jpg";
import deadpool from "../../assets/images/deadpool.png";
import venom from "../../assets/images/venom.jpg";
import thor from "../../assets/images/thor.jpg";

import cocacola from "../../assets/images/cocacola.webp";
import ikea from "../../assets/images/ikea.webp";
import samsung from "../../assets/images/samsung.webp";
import fourf from "../../assets/images/4f.webp";

import barcode from "../../assets/images/barcode.webp";

import handvideo from "../../assets/videos/hand_neon.mp4";

import { SiInstagram, SiBehance } from "react-icons/si";
import { FaLinkedinIn, FaHeart, FaGrinTongueWink } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [spinebg, setspinebg] = useState(false);

  return (
    <Wrapper>
      <section className="one">
        <nav className="z-indextop">
          <ul className="d-flex navbar-link">
            <li>Get Started</li>
            <li className="logo">
              <span className="circle-border">C</span>{" "}
              <span>Crowdly'S MEDIA</span>
            </li>
            <li>About</li>
          </ul>
        </nav>
        <Spline
          onClick={() => {
            setspinebg(false);
          }}
          className={spinebg ? "spline-bg z-index2" : "spline-bg"}
          scene="https://prod.spline.design/rR7vrWYVnjirvbj9/scene.splinecode"
        />

        {/* <video className="video-bg" autoPlay muted>
          <source type="video/mp4" src={Video} />
        </video> */}
        {/* <video className="video-bg-1" autoPlay loop muted={false}>
          <source type="video/mp4" src={Video} />
        </video> */}
        {/* <div className="linear-background"></div> */}
        <div className="XL-text">Social Network</div>
        <div className="L-text">Social Network</div>

        <div className="container-center">
          <div className="M-text">Interactive Design</div>

          <div className="social-icons">
            <span>
              <SiInstagram className="fab" />
            </span>
            <span>
              <FaLinkedinIn className="fab" />
            </span>
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
        </div>

        <div className="text-M">
          <span>
            <FaHeart /> /
            <FaGrinTongueWink /> &nbsp;
          </span>
          = World
        </div>
        <Link to="/login" className="GetStarted">
          Get Started
        </Link>

        <div className="featured">FEATURED</div>
      </section>

      <section className="two">
        <img src={miles} alt="" />
        <img src={ironfist} alt="" />
        <img src={scarlet} alt="" />
        <img src={wolverine} alt="" />
        <img src={hulk} alt="" />
        <img src={deadpool} alt="" />
        <img src={venom} alt="" />
        <img src={thor} alt="" />
      </section>

      <section className="three">
        <span>login</span>
        <svg viewBox="0 0 150 150">
          <path
            id="curve"
            fill="transparent"
            d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
          />
          <text>
            <textPath xlinkHref="#curve" fill="#9b51e0">
              | VIEW | LIKE | POST |
            </textPath>
          </text>
        </svg>
      </section>

      <section className="four">
        <div className="Patners"></div>
        <div className="line-left"></div>

        <div className="brands  ">
          <img src={samsung} alt="" />

          <img src={cocacola} alt="" />
          <img src={fourf} alt="" />
          <img src={ikea} alt="" />
        </div>
        <div className="line-right"></div>

        <span className="million">*Along with 1 million users</span>

        <button className="getstarted-btn">get started</button>
      </section>

      <section className="five">
        <div className="five-content">
          <span className="circle-b">N</span>
          <div className="Why"></div>
        </div>
        <p className="five-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio
          provident laboriosam eligendi nisi accusamus deleniti vero dolorum
          quidem neque consequuntur omnis, ratione ea nobis magni eius
          reiciendis dignissimos voluptate molestias distinctio obcaecati.
          Minima architecto nesciunt dolorem provident numquam adipisci quas,
          obcaecati vero possimus veniam soluta sed est, commodi, voluptatibus
          rerum eum. Quia!
        </p>
        <p className="five-p">
          We often help start ups to get their first site live! Don’t be shy
          send a question!
        </p>

        <p className="five-p">Check out our services.</p>

        {/* <img src={jurrasic} className="bigimg-left" alt="" /> */}
        <Spline
          className="bigimg-left"
          scene="https://prod.spline.design/OPjUA4wRIp6W0MSc/scene.splinecode"
        />
        {/* <img src={avatar} className="bigimg-right" alt="" /> */}
        <Spline
          className="bigimg-right"
          scene="https://prod.spline.design/ynT-4AQcXlkJMFhe/scene.splinecode"
        />
      </section>

      <section className="six">
        <img src={barcode} alt="" className="barcode" />
        <div className="about"></div>

        <div className="grid-3">
          <div className="bnumber">8</div>
          <div className="bnumber">100+</div>
          <div className="bnumber">1,000+</div>
          <div className="mtext">
            Years of <br /> Excellence
          </div>
          <div className="mtext">
            Daily <br /> Newusers
          </div>
          <div className="mtext">
            Weekly <br /> Posts
          </div>
        </div>

        <p className="six-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          veniam sint omnis labore soluta, optio laborum beatae libero modi
          facere magni nobis ullam dolore quasi cumque voluptatibus sit
          blanditiis atque in? Illo earum, deleniti voluptatum architecto, neque
          odio vel laudantium facere consectetur aperiam qui?
        </p>
        <p className="six-p">
          Numerous of contacts allow to push the business above the boundaries.
          We work everyday and we want to make sure that our clients are
          satisfied as possible with the final result.
        </p>
      </section>

      <section className="seven">
        <video className="footer-bg" autoPlay muted loop>
          <source type="video/mp4" src={handvideo} />
        </video>

        <div className="linear-gradient"></div>

        <div className="quote">
          <div>"The best thing to hold</div>
          <div>onto in life is each other"</div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-content">
          <ul className="d-flex navbar-link">
            <li className="logo">
              <span className="circle-border">N</span> <span>WINKLE MEDIA</span>
            </li>
            <li>Services</li>
            <li>Get started</li>
          </ul>
          <div className="footer-icon">
            <span>
              <SiInstagram className="fab" />
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
          <ul className="footer-link">
            <li className="footer-title">located</li>
            <li className="footer-text">kathmandu, Nepal</li>
            <li className="footer-title">WhatsApp:</li>
            <li className="footer-text">+977 9823447627</li>
            <li className="footer-title">Mail:</li>
            <li className="footer-text">Nischal@gmail.com</li>
          </ul>
        </div>

        <div className="line-right"></div>

        <div className="copyright">
          Copyrights © 2022 Winkle’Media. All rights reserved.
        </div>
      </section>
    </Wrapper>
  );
};

export default LandingPage;
