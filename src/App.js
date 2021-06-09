// import Routes from './Routes';
import Header from './components/header';
import Navigation from './components/navigation';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
