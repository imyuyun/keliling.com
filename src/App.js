import './App.css';
import MainConten from './components/MainConten';
import Navigation from "./component/Navigation";

function App() {
  return(
    // jika memiliki lebih dari 1 komponen maka di bungkus dengan div
  <div>
    <Navigation />
    <MainConten />
  </div> 
  )
}

export default App;
