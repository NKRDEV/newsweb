import Login from "./components/Login";
import Signup from "./components/Signup";
import Fetch from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import View from "./components/newspage";


function MyApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="home">home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Fetch />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
        </Routes>
      </div>
    </Router>

);
}
export default MyApp;
