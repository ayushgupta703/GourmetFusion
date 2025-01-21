import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
<<<<<<< HEAD
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const App = () => {
  return (
    // <Router>
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      {/* <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch> */}
    </div>
    // </Router>
=======
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
    </div>
    </Router>
>>>>>>> bc4e66a4a884b02b97bc6bfc6f8254d048916fc3
  );
};

export default App;
