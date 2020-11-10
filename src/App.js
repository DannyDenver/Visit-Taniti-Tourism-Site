import './App.css';
import Header from './core/Header/Header';
import Footer from './core/Footer/Footer';
import HomePage from './pages/HomePage/HomePage.js';
import { Route, Switch } from 'react-router-dom';
import CulturePage from './pages/CulturePage/CulturePage.js';
import LodgingPage from './pages/LodgingPage/LodgingPage.js';
import AdventurePage from './pages/AdventurePage/AdventurePage.js';
import CuisinePage from './pages/CuisinePage/CuisinePage.js';
import TransportationPage from './pages/TransportationPage/TransportationPage.js';
import FAQPage from './pages/FAQPage/FAQPage.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/culture" component={CulturePage} />
        <Route path="/lodging" component={LodgingPage} />
        <Route path="/adventure" component={AdventurePage} />
        <Route path="/cuisine" component={CuisinePage} />
        <Route path="/transportation" component={TransportationPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/" component={HomePage} />

        </Switch>

      <Footer />

    </div>

  );
}

export default App;
