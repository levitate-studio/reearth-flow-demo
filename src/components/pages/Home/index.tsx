import { Link } from "@reach/router";
import React from "react";

export type Props = {
  path?: string;
};

const Home: React.FC<Props> = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/examples">Examples</Link>
      </nav>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
