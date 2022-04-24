import React from "react";
import { Component } from "react";
import { Navigate } from "react-router";

class Home extends Component{
  
    render(){
        return(
            <div>
               
                
                {!localStorage.getItem('id') ? <Navigate replace to="/register" /> : ''}
           
             
                home {localStorage.getItem('id')}
         
            </div>
        )
    }
}
export default Home