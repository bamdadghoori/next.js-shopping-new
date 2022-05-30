import React from 'react'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './searchBox';
const Navbar = () => {
  const totalCount=useSelector((state:RootState)=>state.totalCount)
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
      <li className="nav-item search-section">
      <SearchBox />
</li>
      <li className="nav-item nav-item-shopping-basket">
        <FontAwesomeIcon icon={faShoppingCart}/><span className="badge bg-info text-dark">{totalCount}</span>
      </li>
   
    </ul>
  </div>
</nav>

    </>
  )
}
export default Navbar
