import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PricingToggle from './components/PricingToggle';
import PricingPlans from './components/PricingPlans';
import BgLeft from "./assets/images/bg-left.svg";
import BgRight from "./assets/images/bg-right.svg";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = (toggleState) => {
        setIsMonthly(toggleState);
    };
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="app">
            <Header />
            <main>
                <PricingToggle onToggle={handleToggle} />
                <PricingPlans isMonthly={isMonthly} />
            </main>
            <img src={BgLeft} className="bg-left" alt="Left background element" />
            <img src={BgRight} className="bg-right" alt="Right background element" />
          </div>
      </Router>
  );
}

export default App;
