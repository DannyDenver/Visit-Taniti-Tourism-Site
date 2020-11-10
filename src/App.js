import './App.css';
import Header from './core/Header/Header';
import Footer from './core/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <HomePage></HomePage>
          

      <Footer />

    </div>

  );
}

export default App;

// <header className="App-header">
// <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>