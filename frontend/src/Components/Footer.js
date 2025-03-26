import React from "react";

function Footer() {
  return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4" style={{backgroundColor:'rgb(25 95 145)', height:"10vh"}} >
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <i className="bi bi-bootstrap-fill" style={{color:'white'}}></i>
            </a>
            <span className="mb-3 mb-md-0 " style={{color:'white'}}>
              © 2024 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a  style={{color:'white'}} href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a  style={{color:'white'}} href="/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a  style={{color:'white'}} href="/">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </footer>
  );
}

export default Footer;
