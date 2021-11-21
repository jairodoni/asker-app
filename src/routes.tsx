import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { Start } from './pages/Start';

export default function RoutesList() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/start" element={<Start />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
