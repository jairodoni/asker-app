import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from "./routes";

import "./styles/global.css"

export default function App() {
  return (
    <Router>
      <RoutesList />
    </Router>
  )
}


