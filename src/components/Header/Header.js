import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    {/* the markups texts link <Container> and <Div1>  
    are styled divs the are imported look at the headerstyles.js */}
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          {/* This is the react Icon */}
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span> 
        </a>
      </Link>
    </Div1>
    <Div2>
      {/* this will allow us to scroll to the project section of our page */}
      <li>
        <Link href="#projects"> 
        {/* a Nav link is a styled a` mark up tag */}
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects"> 
        {/* a Nav link is a styled a` mark up tag */}
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects"> 
        {/* a Nav link is a styled a` mark up tag */}
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
