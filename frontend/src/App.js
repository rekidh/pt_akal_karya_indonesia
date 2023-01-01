import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from "./pages/Home";
import React  from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Login}  /> 
        <Route path="/login" exact component={Login}  /> 
        <Route path="/home" exact component={Home}/>
        <Route path="/register" exact component={Register}  /> 
      </Switch>
    </Router>
  )
}    

export default App;
