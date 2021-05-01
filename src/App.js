import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import WatchCard from "./pages/Watch Card/WatchCard";
import Weather from "./pages/Weather/Weather";

const App = () => {
  useEffect(() => {
    if (new Date().getHours() >= 17) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/watchcard" component={WatchCard} />
      <Route exact path="/weather" component={Weather} />
    </Router>
  );
};

export default App;
