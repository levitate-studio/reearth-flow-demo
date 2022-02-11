import { Router } from "@reach/router";

import Example_1 from "./components/examples/1";
import Example_2 from "./components/examples/2";
import Example_3 from "./components/examples/3";
import Examples from "./components/pages/Examples";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Examples path="/examples" />
        <Example_1 path="/example_1" />
        <Example_2 path="/example_2" />
        <Example_3 path="/example_3" />
      </Router>
    </div>
  );
}

export default App;
