const NoPage = () => {
    return (
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
                 <div className="col-md-7">
                           <divl cassName="card p-3 py-4 text-center">
                               <h1 className="h1 text-center">
                                   Oops!</h1>
                               <h2 className="text-center mt-2">
                                   404 Not Found</h2>
                               <div class="error-details text-center mt-4">
                                   Sorry, an error has occured, Requested page not found!
                               </div>
                               <div class="error-actions text-center mt-5">
                                   <a href="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                       Take Me Home </a><a href="/" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </a>
                               </div>
                           </divl>
                  </div>
         </div>
      </div>
    )
  };
  
  export default NoPage;