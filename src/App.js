import { useState } from "react";

import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(1);

  const decFnc = () => (count > 1 ? setCount(count - 1) : null);

  const incFnc = () => setCount(count + 1);

  return (
    <div className="wrapper">
      <div className="watchImg"></div>
      <div className="add_cart flex">
        <Button handleEvent={decFnc} content="-" />
        <div className="count">{count}</div>
        <Button handleEvent={incFnc} content="+" />
        <div className="price">${count * 35}</div>
      </div>
    </div>
  );
};

export default App;
