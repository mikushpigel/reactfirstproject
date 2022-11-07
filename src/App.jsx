import logo from './logo.svg';
import './App.css';
import Mission from './themission';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <Mission></Mission>
      <Counter
        max={56}
        min={-55}></Counter>
    </div>
  );
}

export default App;
