import React from 'react'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
     
     
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {/* <li className="nav-item active">
        <link className="nav-link" href="/">Home <span className="sr-only">(current)</span></link>
      </li> */}
      <li className="nav-item">
        <Link  href="/about"><a className="nav-link">about</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/contact"><a className='nav-link'>contact</a></Link>
      </li>   <li className="nav-item">
        <Link href="/contact"><a className='nav-link'>contact</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/countDownTimer"><a className='nav-link'>countDownTimer</a></Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>

    </>
  )
}
export default Navbar
