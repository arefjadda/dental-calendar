// import React from "react";
// import Calendar from "./calendar/Calendar";

// function App(props) {
//   return <Calendar />;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "./calendar/Calendar";
import About from "./pages/AboutPage";
import Help from "./pages/HelpPage";
import Navigation from "./components/Nav";
import "./App.css";

function App(props) {
  return (
    <Router>
      <Navigation />

      <main>
        <Route path="/" exact>
          <Calendar />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/help" exact>
          <Help />
        </Route>
      </main>

      <footer>
        <p>
          Modified on 1/30/2023. <cite>&copy; 2023 Aref Jadda</cite>.
        </p>
      </footer>
    </Router>
  );
}

export default App;
