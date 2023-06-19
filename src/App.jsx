import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Layout } from 'components/Layout/Layout';
import { TweetsPage } from 'pages/TweetsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
