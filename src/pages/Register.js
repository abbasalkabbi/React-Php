import { Component } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router';
const API_PATH = 'http://localhost/react-php/api/register.php';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          email: '',
          password: '',
          selectedImage:'',
          status:'',
          info:[],
          id:'',

        }
        this.onFileChange = this.onFileChange.bind(this);
      }
    
      
     //send data form
      handleFormSubmit( event ) {
        
        event.preventDefault();
        let reqister_data={
            fname:this.state.fname,
            email: this.state.email,
            password:this.state.password,
            image: this.state.selectedImage
        }
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: reqister_data
          })
          .then(result => this.setState({ info: result.data.message,status:result.data.status,id:result.data.id}))
            

         
            
      }
      // upload image
      onFileChange(e) {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
 
        fileReader.onload = (event) => {
            this.setState({
                selectedImage: event.target.result,
            })
        }
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
          let {fname,email,password}=this.state
          
        return(
            <div className="container d-flex justify-content-center ">
              {/* if you are loggined */}
              {localStorage.getItem('id') ? <Navigate replace to="/" /> :''}
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
                                               minlength="8" required 
                                               onChange={e => this.setState({ password: e.target.value })}
                                              />
                           </div>
                      {/* upload image */}
                      <div class="mb-5">
                                      <label for="Image" class="form-label">Bootstrap 5 image Upload with Preview</label>
                                      <input class="form-control" type="file" id="formFile"  onChange={this.onFileChange}/>
                      </div>

                     {/* Login Button */}
                       <div class="text-center text-lg-start mt-4 pt-2">
                                              <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">Register</button>
                                               <p class="small fw-bold mt-2 pt-1 mb-0">I have an account? 
                                               <a href="/login" class="link-primary"> Login</a>
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
export default Register