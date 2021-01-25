
import './App.css';
import About from "./pages/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/navbar";
import Wrapper from "./components/wrapper/wrapper";
import Footer from './components/Footer/footer';
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
