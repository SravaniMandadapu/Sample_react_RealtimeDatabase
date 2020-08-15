import React, { Component } from 'react'
import {Form,FormGroup,FormControl,Button,Container,Toast} from "react-bootstrap"
import database from "../config"

export class DeleteUser extends Component {
constructor(props) {
    super(props)

    this.state = {
         email:"",
         toastMSg:""
    }
    this.submitHandler=this.submitHandler.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
}
//Change Handlers

changeHandler=e=>{
this.setState({
    email:e.target.value
})
}
submitHandler=e=>{
    e.preventDefault()
    const ref=database.ref("users")
    ref.on('value',snap=>{
        const users=snap.val()
       const keys=Object.keys(users)
         keys.forEach(key=>{

             // console.log(users[key])
             //  console.log(this.state.userdata)
            if(users[key].email===(this.state.email)){
                database.ref("users/"+ key).remove()
                .then(res=> 
                    this.setState({
                        toastMSg:"User removed successfully"
                    })
                    //console.log("User removed successfully")
                    )
                .catch(err=>
                    this.setState({
                        toastMSg:err
                    })
                    //console.log(err)
                    )
                
            
            }
         })
     })

}


    render() {
        return (
            <Container>
            {(this.state.toastMSg) ? <Toast>
            <Toast.Body>{this.state.toastMSg}</Toast.Body>
            </Toast>:null}
                <h3>Delete User</h3>
                <Form onSubmit={this.submitHandler.bind(this)}>
                    <FormGroup>
                        <FormControl 
                          id="email"
                          type="email"
                          name="email"
                          onChange={this.changeHandler}
                          placeholder="Enter email address of user"
                        
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Delete</Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default DeleteUser
