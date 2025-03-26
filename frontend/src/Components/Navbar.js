import React from 'react'
import image_ from '../logo512.png'
function Navbar() {
  return (
      <nav className="navbar" style={{backgroundColor:'rgb(25 95 145)', height:"8vh"}} >
        <div className="container-fluid"  >
          <a className="navbar-brand" href="/" style={{color:'white'}}>
            <img src={image_} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
            Post2Market
          </a>
        </div>
      </nav>
  )
}

export default Navbar
