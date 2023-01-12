import './App.css';
import Tablebody from './Tablebody';
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div> 
        <Tablebody />
      </div>
    </div>
  );
}

export default App;
