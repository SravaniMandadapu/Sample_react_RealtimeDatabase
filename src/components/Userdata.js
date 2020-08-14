import React, { Component } from 'react'
import database from "../config"
import { Container } from 'react-bootstrap'

class Userdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userslist:""
            
        }
    }
    componentDidMount(){
        const ref=database.ref("users")
        ref.on('value',snap=>{
     /// Check whether you are able to retrive data in snap val
        //     const users=snap.val()
           
        //     const keys=Object.keys(users)
        //      var i=0
        //       for(i=0; i<keys.length;i++) {
        //         var k=keys[i]
        //         var email=users[k].email
        //         var username=users[k].username
        //         console.log(username + " " +email)
                
        //     }
        
            this.setState({
                userslist:snap.val()
               
            })
        
        })
    }
        
    
    
    render() {
         const users=this.state.userslist
        
        return (
        <React.Fragment>
        <Container>
        
        <table border="1">
            
        <tr>
          <th>Username</th>
          <th>Email</th>
        </tr>
         {Object.keys(users).map(id=>
         // Display data in list format
        //  <ol>
        //     <li>{users[id].username}  {users[id].email}</li> 
        //  </ol>
         
              
              <tr>
                  <td>{users[id].username}</td>
                  <td>{users[id].email}</td>
              </tr>
             
        
           
         )}  
        </table>
        </Container>
        </React.Fragment>
            
        )}     
       
}

export default Userdata
