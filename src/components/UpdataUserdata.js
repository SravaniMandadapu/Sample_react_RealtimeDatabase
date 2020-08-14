import React, { Component } from 'react'
import database from "../config"
import {Form,Button,FormGroup,FormControl, Container} from "react-bootstrap"

class UpdataUserdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: undefined,
             username: undefined,
             userdata: undefined
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
       this.setState({
           userdata:userdata
       })
       const ref=database.ref("users")
       ref.on('value',snap=>{
           const users=snap.val()
          const keys=Object.keys(users)
         keys.forEach(key=>{

                // console.log(users[key])
                //  console.log(this.state.userdata)
               if(users[key].email===((this.state.userdata).email)){
                   database.ref("users/"+ key).update(userdata,(err,userdata)=>{
                   if(err) return console.log(err)
                    else return console.log("data saved successfully")
                 })
                }
            })
        })
    }
    else{
      console.log("enter valid details")
    }
}


    render() {
        return (
        <Container>
            <Form onSubmit={this.submitHandler.bind(this)} >
                <FormGroup>
                    <FormControl 
                    id="email"
                    type= "text"
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


export default UpdataUserdata
