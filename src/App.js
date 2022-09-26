import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
        <Routes>
              <Route exact path="/lgmvip-to-do-list-app" element={<Home />}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
