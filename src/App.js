import './CSS/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Work from './Pages/Work'
import Header from './Components/HeaderComp/Header'


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
