import './App.css';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1>Hello World!</h1>
     <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
