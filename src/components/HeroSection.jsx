import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Welcome to our website. Here you can find all universities and find best university to study.
          </p>
          <p className="hero-para">
          We will only link you with universities and programs that suit you.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Learn More </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="https://img.freepik.com/free-vector/young-working-woman-use-magnifying-glass-envelope-likes-searching-use-application-computer-sending-email-cartoon-character-flat-vector-illustration_1150-56251.jpg?size=626&ext=jpg" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  .btn {
    max-width: 17rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .hero-img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
