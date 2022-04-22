import React from "react";
import { Component } from "react";
import axios from "axios";
const API_PATH = 'http://localhost/react-php/api/index.php';
class App extends Component{
    
constructor(props) {
    super(props);
    this.state = {
      fname: '',
      email: '',
      password: '',
    }
  }
  handleFormSubmit( event ) {
    event.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
        .then(result => console.log(result.data))
        .catch(error => this.setState({ error: error.message }));
  }
    
    render(){
        return(
            <div className="container d-flex justify-content-center ">
               <form className="mt-1 ">
                 <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded">
                   <div className="card-body p-5">
                   <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                          {/* fullName */}
                          <div class="mb-3">
                                            <label for="Name" class="form-label">Full Name</label>
                                            <input type="email" class="form-control" id="Name" aria-describedby="emailHelp"
                                            value={this.state.fname}
                                            onChange={e => this.setState({ fname: e.target.value })}
                                            />
                                          
                           </div>
                       {/* email */}
                           <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                               value={this.state.email}
                                               onChange={e => this.setState({ email: e.target.value })}
                                               />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                           </div>
                      {/* password */}
                           <div class="mb-3">
                                              <label for="exampleInputPassword1" class="form-label">Password</label>
                                              <input type="password" class="form-control" id="exampleInputPassword1"
                                               value={this.state.password}
                                               onChange={e => this.setState({ password: e.target.value })}
                                              />
                           </div>
       
                  <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">Submit</button>
                   </div>
                 </div>
                
           </form>

            </div>
        )
    }
}
export default App;
