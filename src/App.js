import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/global.css";
import "./scss/styles.scss";

// App components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Architecture from "./components/Architecture";
import Design from "./components/Design";
import Graphisme from "./components/Graphisme";
import Collage from "./components/Collage";

import withContext from "./components/Context/Context";

const HeaderWithContext = withContext(Header);
const HomeWithContext = withContext(Home);
const AboutWithContext = withContext(About);
const ContactWithContext = withContext(Contact);
const ArchitectureWithContext = withContext(Architecture);
const DesignWithContext = withContext(Design);
const GraphismeWithContext = withContext(Graphisme);
const CollageWithContext = withContext(Collage);

class App extends Component {
  render() {
    return (
      <BrowserRouter className="browserrouter">
        <div id="full-app-container">
          <div id="content-container">
            <Route path="/" render={() => <HeaderWithContext />} />
            <Switch>
              <HomeWithContext exact path="/" component={Home} />
              <AboutWithContext exact path="/about" component={About} />
              <ContactWithContext exact path="/contact" component={Contact} />
              <ArchitectureWithContext
                exact
                path="/architecture"
                component={Architecture}
              />
              <DesignWithContext exact path="/design" component={Design} />
              <GraphismeWithContext
                exact
                path="/graphisme"
                component={Graphisme}
              />
              <CollageWithContext exact path="/collage" component={Collage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
