import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from './routes';
import { Header } from './components/Header';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/theme';
import { QuizProvider } from './Context/QuizContext';

import './styles/global.css';

export default function App() {
  return (
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <div className="backgroudImg" >
          <div>
            <Header />
            <Router>
              <RoutesList />
            </Router>
          </div>
        </div>
      </ThemeProvider>
    </QuizProvider >
  );
}
