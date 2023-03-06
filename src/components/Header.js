import React from 'react'
import { ImNewspaper } from "react-icons/im"

const Header = () => {
  return (
    <>
      <nav className="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand text-bg-dark p-3 fs-4" href='/'><ImNewspaper size={35} /> NEWS 24x7</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header