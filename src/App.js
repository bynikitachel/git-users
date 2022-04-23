import NavBar from './components/NavBar';
import State from './components/State';
import User from './components/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <State icon='search-icon' description='Start with searching a GitHub user' />
      </div>
    </div>
  );
}

export default App;
