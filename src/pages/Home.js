import React from "react";
import { Component } from "react";

class Home extends Component{
   loogged(){
       if(localStorage.getItem('id')){
           console.log('true')
       }else{
           console.log('flase')
       }
   }
    render(){
        return(
            <div>
                {localStorage.getItem('id') ? 'run': 'dd'}
                {this.loogged()}
             
                home {localStorage.getItem('id')}
         
            </div>
        )
    }
}
export default Home