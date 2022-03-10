import { Router } from "@reach/router";

import { Editor } from "./pages/Editor";
import Home from "./pages/Home";

import "./pages/Common/df-reset.css";
import "./pages/Common/df-colors.css";
import "./pages/Common/df-app.css";

function App() {
  return (
    <div className="App df-app dark">
      <Router>
        <Home path="/" />
        <Editor path="/editor" />
      </Router>
    </div>
  );
}

export default App;
