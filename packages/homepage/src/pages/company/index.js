import React from 'react';
import styled, { css } from 'styled-components';
import Layout from '../../components/layout';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import {
  ContentBlock,
  Banner,
  TitleWrapper,
  Wrapper,
} from '../_embeds.elements';
import { H2 } from '../../components/Typography';

import KP from './images/kp.svg';
import ArchesCapital from './images/arches-capital.svg';
import Figma from './images/figma.svg';
import Framer from './images/framer.svg';
import Netlify from './images/netlify.svg';
import Zeit from './images/zeit.svg';
import Sourcegraph from './images/sourcegraph.svg';

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.homepage.appleFont};
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${theme.homepage.white};
    margin: 0.5rem 0;

    ${theme.breakpoints.md} {
      font-size: 1.5rem;
      line-height: 1.2;
      max-width: 80%;
    }
  `};
`;

const SeoText = styled.p`
  color: ${props => props.theme.homepage.muted};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4375rem;
  line-height: 37px;
`;

const Border = styled.div`
  height: 1px;
  width: 100%;
  background: #242424;
  margin: 5rem 0;
`;

const AngelInvestors = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 255px);
  grid-gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;

  > div {
    background: #151515;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.45rem 0;

    img {
      margin-bottom: 1.625rem;
    }

    b {
      padding-bottom: 0.5rem;
    }
  }
`;

export default () => (
  <Layout>
    <TitleAndMetaTags title="Accelerating Web Development - CodeSandbox" />
    <Wrapper>
      <TitleWrapper>
        <Title>Accelerating Web Development</Title>
      </TitleWrapper>
      <SeoText>
        Founded in 2017 by Ives van Hoorne and Bas Buursma, our mission is to
        make web development faster. By removing complexity we enable web
        developers to be more productive. And by simplifying collaboration we
        make it easier for teams to work on code together.
      </SeoText>
      <Banner />

      <ContentBlock>
        <div>
          <h3>Code, not infrastructure</h3>
          We handle the development environment, taking on setup, tooling, and
          provisioning, so it’s as fast as possible to start and build projects.
        </div>

        <div>
          <h3>Shareable by default</h3>
          We create solutions that enable developers to work from anywhere and
          teams to build together in new and more effective ways.
        </div>

        <div>
          <h3>Work like local</h3>
          We equip developers with a local editor experience that’s familiar and
          integrated with popular dev tools so the process of creation is
          seamless.
        </div>
      </ContentBlock>
      <Border />
      <H2
        css={`
          text-align: center;
        `}
      >
        Investors and Advisors
      </H2>
      <AngelInvestors>
        <div>
          <img src={Framer} alt="Framer" />
          <b>Koen Bok</b>
          Founder & CEO
        </div>
        <div>
          <img src={Figma} alt="Figma" />
          <b>Dylan Field</b>
          Founder & CEO
        </div>
        <div>
          <img src={Netlify} alt="Netlify" />
          <b>Christian Bach</b>
          Founder & President
        </div>
        <div>
          <div
            css={`
              height: 97px;
              margin-bottom: 1.625rem;
            `}
          />
          <b>Petri Parvinen</b>
          Angel Investor
        </div>
        <div>
          <div
            css={`
              height: 97px;
              margin-bottom: 1.625rem;
            `}
          />
          <b>Marco Jansen</b>
          Founder Catawiki
        </div>
        <div>
          <img src={Netlify} alt="Netlify" />
          <b>Mathias Biilmann</b>
          Founder & CEO
        </div>
        <div>
          <img src={Sourcegraph} alt="Sourcegraph" />
          <b>Quinn Slack</b>
          Founder & CEO
        </div>
        <div>
          <img
            src={Zeit}
            alt="Zeit"
            css={`
              height: 97px;
            `}
          />
          <b>Guillermo Rauch</b>
          Founder & CEO
        </div>
      </AngelInvestors>
      <Border />
      <TitleWrapper>
        <Title
          css={`
            text-align: center;
            width: 100%;
            margin-bottom: 2rem;
          `}
        >
          Made by you, and the CodeSandbox team
        </Title>
      </TitleWrapper>
      <SeoText
        css={`
          text-align: center;
        `}
      >
        We're proudly open-source with more than 150 contributors and counting.
        They work in tandem with our growing, remote-first team.
      </SeoText>
    </Wrapper>
  </Layout>
);
