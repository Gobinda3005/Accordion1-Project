import './App.css';
import Acc from './Acc.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/* <div className='bgGif'>
       <AnimatedGif src="https://i.pinimg.com/originals/f1/69/47/f16947ca6a616349ed63771804d16250.gif" alt="AnimatedGif" />
       </div> */}
      
      <Acc/>
    </div>
  );
}

export default App;