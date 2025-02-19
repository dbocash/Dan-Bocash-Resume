import './App.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import PageContainerBasic from './Components/PageContainerFile/PageContainerDefault';
import ResponsiveAppBar from './Components/ResponsiveAppBar';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <PageContainerBasic />
    </Router>
  );
}

export default App;
