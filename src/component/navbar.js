import imagelogo from "../images/logo.svg";

function Navbar(){
    return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-color">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={imagelogo} alt="" /> </a>
    <input className="form-control me-2 w-50" type="search" placeholder="What are you looking for?" aria-label="Search" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" width="15" alt="" />Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" width="18" alt="" />Cart</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>);
}
export default Navbar;