import './App.css';
import NavBar from './NavBar';
import People from './dataCall'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div> 
        <People />
      </div>
    </div>
  );
}

export default App;
