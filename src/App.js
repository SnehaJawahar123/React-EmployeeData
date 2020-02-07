import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './containers/auth/auth'
import Layout from './components/layout/layout' 

class App extends Component {
  render(){
    return(
      <div>
      <Switch>
        <Route path='/login' component={Auth}/>
        <Route path='/employees' component={Layout}/>
        <Redirect to='/login'/> 
      </Switch>
      </div>
    )
  }
}

export default App;
