import Cards from 'components/Cards/Cards';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinkButtonSmall, TitleTweets } from './Pages.styled';

export const TweetsPage = () => {
  return (
    <>
      <TitleTweets>Find users to follow</TitleTweets>
      <NavLinkButtonSmall to="/">&#10229; Go Back</NavLinkButtonSmall>
      <Cards />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
