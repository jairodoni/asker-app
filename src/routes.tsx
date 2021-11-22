import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Start } from './pages/Start';
import { Asks } from './pages/Asks';
import { PageNotFound } from './pages/PageNotFound';
import { RecordSession } from './pages/RecordSession';

export default function RoutesList() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/asks" element={<Asks />} />
        <Route path="/record" element={<RecordSession />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
