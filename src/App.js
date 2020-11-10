import './App.css';
import Header from './core/Header/Header';
import Footer from './core/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CulturePage from './pages/CulturePage/CulturePage'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/culture"
          component={CulturePage}
        />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />

    </div>

  );
}

export default App;
