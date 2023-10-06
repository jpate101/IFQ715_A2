
import './App.css';
import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Login from "./login";
import Landing from "./Landing";
import Rankings from "./Rankings";
import Search from "./Search";
import Registration from "./Registration";
import Logout from "./Logout";
import Factors from "./Factors";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* the content */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Rankings" element={<Rankings />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Factors" element={<Factors />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
 }

export default App;
