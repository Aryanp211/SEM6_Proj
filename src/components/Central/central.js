import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";
import PendingRequest from './PendingRequest'
import Navbar from "./navcentral.component";
import Statewise from "../statewise";
import Login from '../Login/login.component';
import alltransaction from './alltransaction';
import CentralCard from './CentralCard'
import Pending from './Pending';
import Authorized from './Authorized';
import AllocMoney from './AllocMoney'
import Emblem from '../State/Logos/Emblem.svg'
class central extends Component {
  render() {
    return(
   
    <Router>
      <div className="main">
      <header className='StateHeader'>
      <div className='EmblemCentraldiv'>
        <img src={Emblem} className='EmblemCentral'></img></div>
      </header>

       <Navbar></Navbar>
   
      <Switch>
      
       
      <div className="container">  
   
      <Route exact path="/alltransaction" component={alltransaction} />
      <Route exact path="/Allocate" component={AllocMoney} />
      <Route exact path="/PendingRequest" component={PendingRequest} />
      {/* <Route exact path="/statewisetransaction" component={Statewise}/> */}
      <Route exact path="/" component={Login} />
      <Route exact path='/Pending' component={Pending}/>
      <Route exact path='/Authorized' component={Authorized}/>
      </div>
      
      </Switch>
      </div>
    </Router>
  );
}
}

export default central;