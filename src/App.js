import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SingupF from './pages/singup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SingupF />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
