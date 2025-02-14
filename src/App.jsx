import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import PageContainerBasic from './Components/PageContainerDefault';

function App() {
  return (
    <Router>
      <PageContainerBasic />
    </Router>
  );
}

export default App;
