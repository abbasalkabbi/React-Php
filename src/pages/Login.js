import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";
const url_login='http://localhost/react-php/api/login.php';
class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          info:[],
          status:'',
          id:''
         

        }
      }
      handleFormSubmit( event ) {
        
        event.preventDefault();
        let login_data={
            email: this.state.email,
            password:this.state.password,
        }
        axios({
            method: 'post',
            url: `${url_login}`,
            headers: { 'content-type': 'application/json' },
            data: login_data
          })
            .then(result => this.setState(
                { 
                info: result.data.message,
                status:result.data.status,
                id:result.data.id
            }))

         
            
      }
      error(){
        if(this.state.status ===false){
         
          return(
            <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
          
            {this.state.info}
           
      </div>
          )
        
        }else{
        if(this.state.info=='successful'){
          localStorage.setItem('id',this.state.id)
          if(localStorage.getItem('id')){
            return(
            <Navigate replace to="/" />
            )
          }
          }
        }
    }
    render(){
        let {email,password}=this.state
        return(
            <div className="container d-flex justify-content-center ">
            {/* if you are loggined */}
            {localStorage.getItem('id') ? <Navigate replace to="/" /> :''}
             <form className="mt-1  ">
              
               <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                 <div className="card-body  p-5">
                 <h2 class="text-uppercase text-center mb-5"> Login </h2>
                  {/* alert Error */}
                
                  {this.error()}
              
              {/* End  alert Error */}
                       
                     {/* email */}
                         <div class="mb-3">
                                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                             value={email}
                                             onChange={e => this.setState({ email: e.target.value })}
                                             />
                                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                         </div>
                    {/* password */}
                         <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1"
                                             value={password}
                                             onChange={e => this.setState({ password: e.target.value })}
                                            />
                         </div>
     
              
                {/* Login Button */}
                        <div class="text-center text-lg-start mt-4 pt-2">
                                       <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">Login</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                                        <a href="/register" class="link-primary">Register</a>
                                        </p>
                         </div>
               {/* END Login Button */}
                 </div>
               </div>
              
         </form>

          </div>
        )
    }
}
export default Login