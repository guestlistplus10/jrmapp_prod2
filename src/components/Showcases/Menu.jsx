import React from 'react';
import Link from 'next/link';

function Menu({ lightMode }) {
  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach(item => {
      item.classList.add('hoverd');
    });
    event.currentTarget.classList.remove('hoverd');
  }

  function handleMouseLeave() {
    document.querySelectorAll('ul.main-menu li').forEach(item => item.classList.remove('hoverd'));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu');
    if (subMenu) {
      if (subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.remove('sub-open');
        subMenu.style.maxHeight = '0';
        subMenu.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '400px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }

  return (
    <div className="hamenu">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="menu-text">
              <div className="text">
                <h2></h2>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="menu-links">
              <ul className="main-menu rest">

              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu" ><span>
                    <Link href={`/`} className="fill-text" data-text="Home">Home</Link>
                      </span> <i>
                      </i></div>
                  </div>
                </li>

                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu" ><span>
                    <Link href={`/jrmwebsite/studio`} className="fill-text" data-text="Studio">Studio</Link>
                      </span> <i>
                      </i></div>
                  </div>
                </li>

                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu" ><span>
                    <Link href={`/jrmwebsite/contact`} className="fill-text" data-text="Kontakt">Kontakt</Link>
                      </span> <i>
                      </i></div>
                  </div>
                </li>

                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu" ><span>
                    <Link href={`/jrmwebsite/faq`} className="fill-text" data-text="FAQ">FAQ</Link>
                      </span> <i>
                      </i></div>
                  </div>
                </li>

                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu" ><span>
                    <Link href={`/jrmwebsite/datenschutzerklaerung`} className="fill-text" data-text="Datenschutzerklärung">Datenschutzerklärung</Link>
                      </span> <i>
                      </i></div>
                  </div>
                </li>

                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu" ><span>
                    <Link href={`/jrmwebsite/impressum`} className="fill-text" data-text="Impressum">Impressum</Link>
                      </span> <i>
                      </i></div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end">
            <div className="cont-info full-width">
              <div className="item">

                <p><a href="#0">contact@jrmrecords.com</a></p>
              </div>

              <ul className="rest social-text d-flex mt-50 fz-13">
              <li className="mr-20">
                  <a href="https://www.instagram.com/jrmrecords_/?hl=de" className="hover-this" target="_blank"><span className="hover-anim">Instagram</span></a>
                </li>
                
                <li className="mr-20">
                  <a href="https://www.tiktok.com/@juniormafiaofficial?_t=8dSxx7JbJ5n&_r=1" className="hover-this" target="_blank"><span className="hover-anim">TikTok</span></a>
                </li>

              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu