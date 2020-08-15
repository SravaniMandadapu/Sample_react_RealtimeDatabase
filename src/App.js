import React from 'react'
import {Route} from "react-router-dom"
import Postdata from "./components/Postdata"
import NavbarComponent from './components/NavbarComponent'
import Home from './components/Home'
import Userdata from './components/Userdata'
import UpdataUserdata from './components/UpdataUserdata'
import DeleteUser from './components/DeleteUser'

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Route exact path="/postdata" component={Postdata}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/userdata" component={Userdata} />
      <Route exact path="/update" component={UpdataUserdata} /> 
      <Route exact path="/delete" component={DeleteUser} />
    </React.Fragment>
  )
}

export default App

