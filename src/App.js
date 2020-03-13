import React from 'react'
import './App.css'
import Home from './components/Home'
import MLB from './components/MLB'
import NBA from './components/NBA'
import NFL from './components/NFL'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class  App extends React.Component{
  render(){
  return(
    <Router>
     <div className='routes'>

       <nav>
         <ul>
           <li>
           <Link to ="/Home">Home </Link>
           </li>
           <li>
           <Link to ="/Mlb">MLB Arrests</Link>
           </li>
           <li>
           <Link to ="/Nba"> NBA Arrests </Link>
           </li>
           <li>
           <Link to ="/Nfl"> Nfl Arrests </Link>
           </li>
         </ul>
       </nav>
     <Switch>
     <Route exact path="/Home" component={Home}/>
     <Route path="/MLB" component={MLB}/>
     <Route path="/NBA" component={NBA}/>
     <Route path="/NFL" component={NFL}/>
     </Switch>
       </div>
   </Router>
   );

}
}



export default App;
