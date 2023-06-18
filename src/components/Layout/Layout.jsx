import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Navigation } from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
