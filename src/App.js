import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";


class App extends Component{
    
constructor(props) {
    super(props);
    this.state = {
       
    }
  }

    render(){
     // let {user}=this.state
        return(
           <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
             <Route path="register" element={<Register/>}/>
              
               <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        )
    }
}
export default App;
/** {user &&  <Route index element={<Home />} />}
               {!user &&  <Route index element={<Register/>}/>} */