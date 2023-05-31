import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/appointment" component={Appointment} />
          {/* Add more routes for other pages */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
