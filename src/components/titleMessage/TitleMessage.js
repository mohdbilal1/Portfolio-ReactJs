
import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.titleColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4),0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    top: 18rem;
    div {
      .main {
        font-size: 40px;
      }
      .sub {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 767px) {
    top: 14rem;
    div {
      .main {
        font-size: 18px;
      }
      .sub {
        font-size: 16px;
      }
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Welcome,
          <br />
          <span>
            <strong style={{ textTransform: 'uppercase' }}>To My Profile Portfolio 👋</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Fullstack Developer", "Nature Lover", "ReactJS Developer", "Cricketer", "Web Developer",],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;

