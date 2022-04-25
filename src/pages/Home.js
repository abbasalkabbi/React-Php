import React from "react";
import { Component } from "react";
import { Navigate } from "react-router";
const url = 'http://localhost/react-php/api/data.php?id=';
class Home extends Component{
    constructor(){
        super()
        this.state={
         id:localStorage.getItem('id'),
         name:'',
         email:'',

        }
    }
   // created method fetch data from api
   componentDidMount(){
       if(localStorage.getItem('id')){
 
   
        fetch(`${url+localStorage.getItem('id')}`)
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json.id)
            this.setState({
                name:json.Name,
                email:json.email,
            })
           
        })
       }
    
}
checklogin(){
    if(!localStorage.getItem('id')){
        return(
            <Navigate replace to="/register" />
        )
    }
}
logout(){
    if(localStorage.getItem('id')){
        localStorage.removeItem('id')
        window.location.reload(false);
}
}
    render(){
        const {name,email}=this.state
        return(
            <div class="container mt-5">
                    <div class="row d-flex justify-content-center">
                          <div className="col-md-7">
                                        
                                         {this.checklogin()}
                                       
                                   
                             <div className="card p-3 py-4">
                                     <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"/> </div>
                                     <div class="text-center mt-3">
                                          <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                          <h5 class="mt-2 mb-0">Hi,{name}</h5> 
                                               <div class="px-4 mt-1">
                                                   <p class="fonts">{email} </p>
                                               </div>
                                               <button class="btn btn-outline-danger px-4" onClick={this.logout}>Log Out</button>

                                     </div>
                             </div>
                                       
                                 
                           </div>
            </div>
           
            </div>
         
        )
    }
}
export default Home
/** onClick={this.logout()} */