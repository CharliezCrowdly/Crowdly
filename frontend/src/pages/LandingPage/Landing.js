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
              <span className="circle-border">C</span> <span>Crowdly</span>
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

      <section className="five">
        <div className="five-content">
          <span className="circle-b">N</span>
          <div className="Why"></div>
        </div>
        <p className="five-p">
          It’s our attention to the small stuff, scheduling of timelines and
          keen project management that makes us stand out from the rest. We are
          creative, while keeping a close eye on the calendar and your
          budget.You want results. We have found that the best way to get them
          is with up front research – of your company, competitors, target
          market and customer psychographics. Only after we fully understand you
          and your customers, do we recommend a plan of attack.
        </p>
        <p className="five-p">
          We bring our diverse background of advertising, design, branding,
          public relations, research and strategic planning to work for your
          company. Not only will your materials look great – they will get
          results. Yes, we have won awards for our work. But we don’t create
          concepts in a vacuum – they fit into the standards of your industry.
          And once we have a total picture of your company, its target audience
          and goals, we’ll create a detailed plan – that also includes a
          commitment to stay on budget and on deadline.
        </p>

        <p className="five-p">Check out our services.</p>

        {/* <img src={jurrasic} className="bigimg-left" alt="" /> */}
        {/* <Spline
          className="bigimg-left"
          scene="https://prod.spline.design/OPjUA4wRIp6W0MSc/scene.splinecode"
        /> */}
        {/* <img src={avatar} className="bigimg-right" alt="" /> */}
        {/* <Spline
          className="bigimg-right"
          scene="https://prod.spline.design/ynT-4AQcXlkJMFhe/scene.splinecode"
        /> */}
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
          Crowdly, a free-lancing social media platform, is aimed for
          simplifying recruiting and hiring process for the parties involved.
          With this system, employers, and potential employees could connect
          directly, efficiently cutting out the middleman. Moreover, with a
          real-time communication system integrated into this platform,
          employers can be confident about their applicants. In the favor of
          applicants, Crowdly offers total transparency in their application
          process by informing them about state of their application. The
          process of searching jobs remains one of the most hassled tasks in
          one’s professional life. Furthermore, the lack of transparency in the
          process leaves the applicants unsure about their application. This
          creates sort of an unprofessional atmosphere between the employer and
          the potential employee.
        </p>
        <p className="six-p">
          To address these, Crowdly was founded. With this platform, the job
          searching process will be made easier and hassle free. The users can
          apply for any job that matches their qualifications and skill sets.
          Their profile will directly be sent to the employers without having to
          upload a CV. In the favor of Employers, the employers can commit to
          100% transparency of application by providing them with status of
          their application.
        </p>
      </section>

      <hr></hr>
      <section className="footer">
        <div className="footer-content">
          <ul className="d-flex navbar-link">
            <li className="logo">
              <span className="circle-border">N</span>{" "}
              <span>CROWDLY MEDIA</span>
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
            <li className="footer-text">crowdly@gmail.com</li>
          </ul>
        </div>

        <div className="line-right"></div>

        <div className="copyright">
          Copyrights © 2022 Crowdly’Media. All rights reserved.
        </div>
      </section>
    </Wrapper>
  );
};

export default LandingPage;
