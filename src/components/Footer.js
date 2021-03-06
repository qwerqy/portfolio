import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    flex-direction: column-reverse;
    justify-content: center;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
          roles
          socialLinks {
            id
            url
            name
            fontAwesomeIcon
          }
        }
      }
    `}
    render={(data) => {
      const { socialLinks } = data.contentfulAbout;

      return (
        <Box p={[2, 3]} backgroundColor="primaryDark" as="footer">
          <FooterContainer>
            <Fade left>
              <TextFooter fontSize={[1, 2]}>
                <span>© 2019 — Designed & developed by Amin Roslan</span>

                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </TextFooter>
            </Fade>
            <Flex>
              <Fade right>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink {...rest} color="background" />
                  </Box>
                ))}
              </Fade>
            </Flex>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
