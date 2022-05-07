
import './App.css';
import Home from './Components/Home';
import CompA from './Components/CompA';
import Fatch from './Components/Fatch';
import Fatch1 from './Components/Fatch1';
import Counter from './Components/HigherOrderComp/Counter';
import HOCRed from './Components/HigherOrderComp/HOCRed';


function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    {/* <CompA/> */}
    {/* <Fatch/> */}
    {/* <Fatch1/> */}
    <HOCRed cmp={Counter}/>
    
    </div>
  );
}

export default App;
