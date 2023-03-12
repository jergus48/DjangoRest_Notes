import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";


import './App.css';
import Navb from './components/Navb';
import NotesListPage from './components/Notes';
import NotePage from './components/NotePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Navb />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;