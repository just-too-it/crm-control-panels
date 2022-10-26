import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PagesLinks } from 'core/constants/pagesLinks';
import { Home } from 'views/pages/Home';
import { Address } from 'views/pages/Address';
import { Layout } from 'views/layouts/Layout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={PagesLinks.HOME_PAGE} element={<Layout />}>
        <Route path={PagesLinks.HOME_PAGE} element={<Home />} />
        <Route path={PagesLinks.ADDRESS_PAGE} element={<Address />} />
        <Route path={'*'} element={<Home />} />
      </Route>
    </Routes>
  );
};
