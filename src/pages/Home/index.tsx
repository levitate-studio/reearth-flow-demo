import { Link } from "@reach/router";
import React from "react";
import "./df-home.css";

export type Props = {
  path?: string;
};

const Home: React.FC<Props> = () => {
  return (
    <div className="df-home">
      <h1>DATAFLOW</h1>
      <nav>
        <Link to="/editor">Editor-alpha</Link>
      </nav>
    </div>
  );
};

export default Home;
