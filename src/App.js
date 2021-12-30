import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/post-details/:id" element={<PostDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
