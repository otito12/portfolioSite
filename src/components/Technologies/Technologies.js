import React from 'react';
import { DiCode, DiFirebase, DiZend} from 'react-icons/di';
import {IoIosGlobe, IoIosPaper}from 'react-icons/io';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with these technologies 
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph> 
            TypeScript  <br/>
            JavaScript  <br/>
            Python  <br/>
            C++  <br/>
            Racket  <br/>
            SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoIosGlobe size="3rem" />
        <ListContainer>
          <ListTitle>Web & Database</ListTitle>
          <ListParagraph>
            HTML   <br/>
            CSS   <br/>
            MongoDB   <br/>
            PostgreSQL <br/>
            Firebase   <br/>
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Angular    <br/>
            ReactJS    <br/>
            ExpressJS    <br/>
            NodeJS  <br/>
            Spring   
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>        
        <IoIosPaper size="3rem" />
        <ListContainer>
          <ListTitle>Technology</ListTitle>
          <ListParagraph>
            Git   <br/>
            Postman     <br/>
            Heroku     <br/>
            MS Office   <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
