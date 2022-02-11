import { Link } from "@reach/router";
import React from "react";

export type Props = {
  path?: string;
};

const Examples: React.FC<Props> = () => {
  return (
    <div>
      <li>
        <Link to="/example_1">Example_1</Link>
      </li>
      <li>
        <Link to="/example_2">Example_2</Link>
      </li>
      <li>
        <Link to="/example_3">Example_3</Link>
      </li>
      <li>
        <Link to="/example_a">Example_a</Link>
      </li>
    </div>
  );
};

export default Examples;
