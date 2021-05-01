import { useState } from "react";

import "./watchcard.css";
import Button from "../../components/Button";

const WatchCard = () => {
  const [count, setCount] = useState(1);
  const imgUrl =
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const decFnc = () => (count > 1 ? setCount(count - 1) : null);
  const incFnc = () => setCount(count + 1);

  return (
    <div className="wrapper flex">
      <div className="watch-card">
        <div className="watchImg flex">
          <img src={imgUrl} alt="img" />
        </div>
        <div className="add_cart flex">
          <Button handleEvent={decFnc} content="-" />
          <div className="count">{count}</div>
          <Button handleEvent={incFnc} content="+" />
          <div className="price">${count * 35}</div>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
