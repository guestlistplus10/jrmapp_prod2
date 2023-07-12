/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Link from 'next/link';

function Navbar({ lightMode }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo img");

    if (bodyScroll > 300) {
      navbar.classList.add("nav-scroll");
      if (lightMode) logo.src = "/dark/assets/imgs/logo-dark.png";
    }
    else {
      navbar.classList.remove("nav-scroll");
      if (lightMode) logo.src = "/dark/assets/imgs/logo-light.png";
    }
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains('open')) closeBtn.style.display = 'block';
    else closeBtn.style.display = 'none';
  }

  return (
    <nav className="navbar nav-crev navbar-expand-lg">
      <div className="container">
        <a className="logo icon-img-100" href="#">
          <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="true" aria-expanded="false"><span className="rolling-text">Home</span></a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-corporate`}>Home Corporate</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-onepage`}>Home One page</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-digital-agency`}>Digital Agency</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-freelancer`}>Freelancer</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-marketing-agency`}>Marketing Agency</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-creative-agency`}>Creative Agency</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-startup`}>Startup Bussines</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/home-architecture`}>Architecture</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/${lightMode ? 'light' : 'dark'}/page-about`}><span className="rolling-text">About</span></a>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="true" aria-expanded="false"><span className="rolling-text">Pages</span></a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/page-services`}>Services</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/page-team`}>Our Team</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/page-contact`}>Contact Us</Link>
              </div>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="true" aria-expanded="false"><span className="rolling-text">Portfolio</span></a>
              <div className="dropdown-menu mega-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Showcases</h6>
                        </div>
                        <div className="links">
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-parallax-slider`}>Parallax Slider</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-frame-slider`}>Frame Slider</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-circle-slider`}>Circle Slider</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-carousel`}>Showcase Carousel</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center-horizontal`}>Interactive Links1</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center`}>Interactive Links2</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/showcase-parallax`}>Vertical Parallax</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Portfolio Works</h6>
                        </div>
                        <div className="links">
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/portfolio-classic-grid`}>Classic Grid</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/portfolio-grid`}>Modern Grid</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/portfolio-metro`}>Portfolio Metro</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/project-details1`}>Project Details 1</Link>
                          <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/project-details2`}>Project Details 2</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="true" aria-expanded="false"><span className="rolling-text">Blogs</span></a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-classic`}>Blog Standerd</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-list`}>Blog List</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-half-img`}>Image Out Frame</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-details`}>Blog Details</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/${lightMode ? 'light' : 'dark'}/page-contact`}><span className="rolling-text">Contact</span></a>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button><span className="pe-7s-search"></span></button>
          </div>
          <div className="search-icon" onClick={toggleSearch}>
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar