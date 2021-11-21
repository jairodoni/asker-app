import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from './routes';
import { Header } from './components/Header'
import './styles/global.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/theme';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="backgroudImg">
        <Header />
        <Router>
          <RoutesList />
        </Router>
      </div>
    </ThemeProvider>

  );
}
