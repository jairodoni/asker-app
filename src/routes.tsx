import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Start } from './pages/Start';
import { Asks } from './pages/Asks';
import { PageNotFound } from './pages/PageNotFound';
import { RecordSession } from './pages/RecordSession';
import { Answer } from './pages/Answer';

export default function RoutesList() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/asks" element={<Asks />} />
        <Route path="/record" >
          <Route index element={<RecordSession />} />
          <Route path="question/:askId" element={<Answer />} />
        </Route>
        <Route path="/answer" element={<Answer />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
