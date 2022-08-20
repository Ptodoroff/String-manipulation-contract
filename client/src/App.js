import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <EthProvider>
  <div className="container">
    <h1 className="text-center"> String manipulation</h1>
    <div >
       <div>
        <h2> Length</h2>
        <form>
          <div className ="form-group">
            <label htmlFor="string-length">String</label>
            <input type="text" className="form-control" id="string-length"/>
            </div>
            <button type="submit" className="">Submit</button>
            <p> {length && `Result: ${length}`}</p>
            </form>

          </div>
       </div>

       <br/>







       </div>

    </EthProvider>
  );
}

export default App;
