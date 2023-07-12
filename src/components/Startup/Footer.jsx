import React, { useEffect } from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/app-data.json';

function Footer({ lightMode, subBg }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer className={subBg ? 'sub-bg pt-80' : ''}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">

                <img src="/dark/assets/imgs/logo-light.png" alt="Bild JRM"></img>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Email</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">contact@jrmrecords.com</a>
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
              <li>
                <a href="https://www.instagram.com/jrmrecords_/?hl=de" target="_blank">Instagram</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@juniormafiaofficial?_t=8dSxx7JbJ5n&_r=1" target="_blank">TikTok</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Links</h6>
              </div>
              <ul className="rest social-text">
              <li>
                <Link href="/" >Home</Link>
                </li>
              <li>
                  <Link href="/jrmwebsite/studio" >Studio</Link>
                </li>
              <li>
                <Link href="/jrmwebsite/faq" >FAQ</Link>
                </li>
                <li>
                <Link href="/jrmwebsite/contact" >Kontakt</Link>
                </li>
                <li>
                  <Link href="/jrmwebsite/datenschutzerklaerung" >Datenschutzerklärung</Link>
                </li>
                <li>
                  <Link href="/jrmwebsite/impressum" >Impressum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer