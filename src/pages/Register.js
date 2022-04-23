import { Component } from 'react'
import axios from 'axios';

const API_PATH = 'http://localhost/react-php/api/register.php';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          email: '',
          password: '',
          status:'',
          info:[],
          id:'',

        }
      }
    
      
     //send data form
      handleFormSubmit( event ) {
        
        event.preventDefault();
        let reqister_data={
            fname:this.state.fname,
            email: this.state.email,
            password:this.state.password,
        }
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: reqister_data
          })
            .then(result => this.setState({ info: result.data.message,status:result.data.status,id:result.data.id}))

         
            
      }
      error(){
        if(this.state.status ===false){
         
          return(
            <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
          
            {this.state.info}
           
      </div>
          )
        
        }else{
        
          localStorage.setItem('id',this.state.id)
        }
      }
      
      render(){
          let {fname,email,password}=this.state
          
        return(
            <div className="container d-flex justify-content-center ">
              
               <form className="mt-1  ">
                
                 <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                   <div className="card-body  p-5">
                   <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                    {/* alert Error */}
                  
                    {this.error()}
                
                {/* End  alert Error */}
                          {/* fullName */}
                          <div class="mb-3 ">
                                            <label for="Name" class="form-label">Full Name</label>
                                            <input type="email" class="form-control" id="Name" aria-describedby="emailHelp"
                                            value={fname}
                                            onChange={e => this.setState({ fname: e.target.value })}
                                            />
                                          
                           </div>
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
       
                  <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">Register</button>
                   </div>
                 </div>
                
           </form>

            </div>
        )
    }
}
export default Register