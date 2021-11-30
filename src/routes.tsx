import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Start } from './pages/Start';
import { Questions } from './pages/Questions';
import { PageNotFound } from './pages/PageNotFound';
import { HistoricSession } from './pages/HistoricSession';
import { Answer } from './pages/Answer';

export default function RoutesList() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/historic" >
          <Route index element={<HistoricSession />} />
          <Route path="question/:questionId" element={<Answer />} />
        </Route>
        <Route path="/answer" element={<Answer />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
