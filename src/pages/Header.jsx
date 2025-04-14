import React from 'react';

const Header = () => {
    return (
        <div>
          <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
  <div className="container-fluid">
   
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src="your-logo.png" alt="Logo" width="40" className="me-2"/>
      <span>OCR <small className="text-muted">ONLINE CASINO REPORTS</small></span>
    </a>

   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

  
    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

     
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Casinos</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Top Casinos</a></li>
            <li><a className="dropdown-item" href="#">New Casinos</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Bonuses</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Welcome Bonuses</a></li>
            <li><a className="dropdown-item" href="#">Free Spins</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Gambling</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Regulations</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Guides</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">How to Play</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Games</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Slots</a></li>
          </ul>
        </li>

     
        <li className="nav-item">
          <a className="nav-link" href="#">Jackpots</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Forum</a>
        </li>
      </ul>

      
      <div className="d-flex align-items-center">
        <a href="#" className="text-white me-3">
          <i className="bi bi-search"></i>
        </a>
        <a href="#" className="text-white">
          <i className="bi bi-globe"></i> International
        </a>
      </div>
    </div>
  </div>
</nav>
          </div>





        </div>
    );
};

export default Header;

