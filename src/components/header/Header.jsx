import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
<div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand text" to={`/`}>
            Movie app
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text" to={`/`}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text" to={`/listmovie`}>List movie</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link to = {`/search`}>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Movie</button>
            </Link>
          </form>
        </div>
      </nav>
       
      </div>



    );
}

export default Header;