import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Span,
  Box,
  Title,
  NavLinkButton,
  MainImg,
  Footer,
} from './Pages.styled';
import { ReactComponent as IconsGithub } from '../images/IconsGithub.svg';

export const HomePage = () => {
  return (
    <>
      <div id="wrap">
        <Box>
          <Title>Welcome! This is the best tweets app</Title>
          <MainImg /> <NavLinkButton to="tweets">Start</NavLinkButton>
        </Box>
      </div>
      <footer>
        <Footer>
          <Span href="https://github.com/Ivanka1905">
            <IconsGithub /> Ivanka1905</Span>
        </Footer>
      </footer>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
