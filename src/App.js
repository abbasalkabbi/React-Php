import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";


class App extends Component{
    
constructor(props) {
    super(props);
    this.state = {
     
    }
  }
 
   
    render(){ 
        return(
          <div>
          
   <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Layout />}>
           
             <Route index element={<Home />} />   
             <Route path="register" element={<Register/>}/>
             <Route path="Login" element={<Login/>}/>
             <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
          </div>
        
        )
    }
}
export default App;
/** {user &&  <Route index element={<Home />} />}
               {!user &&  <Route index element={<Register/>}/>} */