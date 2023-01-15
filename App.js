import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Self from './myself';
import Carrer from './carrer';
import NotFound from './NotFound';
import Visitor from './CreateVisitor';
import Education from './Education';


function App() {

  

  return (
    <Router>

      <div className="App">
       <Navbar />
    
      <div className="content-direction">

        <Switch>

          <Route exact path="/">
            <Home />    
          </Route>
          <Route exact path="/myself">
            <Self />
          </Route>
          <Route exact path="/carrer">
            <Carrer />
          </Route>
          <Route exact path="/carrer/education">
            <Education />
          </Route>
          <Route exact path="/register">
            <Visitor />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

      </div>

      </div>
    
    </Router>
    
  );
}

export default App;
