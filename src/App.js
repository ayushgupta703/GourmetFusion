import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
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
  );
};

export default App;
