import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

export default function RoutesList() {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
