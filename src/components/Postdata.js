import React, { Component } from 'react'
import {Form,Button,FormGroup,FormControl, Container,Toast} from "react-bootstrap"
import database from "../config"
import {Redirect} from "react-router-dom"

 
class postdata extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             username: "",
             errMsg: "",
             toastMSg:""
        }
        this.usernameChangeHandler=this.usernameChangeHandler.bind(this)
        this.emailChangeHandler=this.emailChangeHandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    
    //value change handlers
    emailChangeHandler=e=>{
        this.setState({
            email:e.target.value
        })
    }
    usernameChangeHandler=e=>{
        this.setState({
            username:e.target.value
        })
    }

    submitHandler=e=>{
    e.preventDefault()
    if(!(this.state.email===undefined && this.state.username===undefined)){
            
                    var userdata={
                        email:this.state.email,
                        username:this.state.username
                     }
                    //  const ref=database.ref("users")
                    //         ref.on('value',snap=>{
                    //             const users=snap.val()
                    //                  const keys=Object.keys(users)
                    //                  keys.forEach(key=>{

                    //              // console.log(users[key])
                    //              //  console.log(this.state.userdata)
                    //               if(!(users[key].email)){
                                      
                                       database.ref("users").push(userdata,(err,userdata)=>{
                                       if(err) return console.log(err)
                                       else {return (
                                         this.setState({
                                             toastMSg: "User data posted sucessfully"
                                         })
                                        
                                        //console.log("data saved successfully")
                                        )}
                                    })
                                // }

                                     
                            //     })
                                 
                     
                            // })
                   
                
          
        }
        else{
         console.log("Enter valid details")
    }
}


    render() {
    
        
        return (
        
          
        <Container>
        {(this.state.toastMSg) ? <Toast>
            <Toast.Body>{this.state.toastMSg}</Toast.Body>
        </Toast>:null}
         <h3>New User</h3>
         
            <Form onSubmit={this.submitHandler.bind(this)} >
                <FormGroup>
                    <FormControl 
                    id="email"
                    type= "email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.emailChangeHandler}
                    required 
                    
                    />

                </FormGroup>
                <FormGroup>
                    <FormControl 
                    id="username"
                    type= "text"
                    name="username"
                    placeholder="Enter username"
                    onChange={this.usernameChangeHandler}
                    required 
                    
                    />
                    
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Post</Button>
                </FormGroup>
            </Form>
            </Container>
        )
    }
}

export default postdata





