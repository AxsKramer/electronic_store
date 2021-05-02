import React from "react";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import { IconContext } from "react-icons";

function App() {
  return (
    <IconContext.Provider value={{ color: "white", size: '30px'}}>
      <Router>
        <Layout>
          <Switch>
            <Routes />
          </Switch>
        </Layout>
      </Router>
    </IconContext.Provider>
  );
}

export default App;
