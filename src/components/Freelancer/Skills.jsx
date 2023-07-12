import React from 'react';
import Link from 'next/link';

function Skills({ lightMode }) {
  return (
    <section className="skills-exp section-padding sub-bg" data-scroll-index="4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-lg-head mb-80">
              <div className="position-re">
                <h6 className="dot-titl-non mb-10">Soft- & Hardware</h6>
                <h2 className="fz-50">Nutzbare Digital Audio Workstations</h2>
              </div>
            </div>
            <div className="skill-item d-flex justify-content-between md-mb50">
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/jrmwebimg/icons/protoolsicon.png`} alt="" />
                </div>
                <span className="mt-15">Avid ProTools</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/jrmwebimg/icons/abletonicon.png`} alt="" />
                </div>
                <span className="mt-15">Ableton Live</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/jrmwebimg/icons/flicon.png`} alt="" />
                </div>
                <span className="mt-15">Fl Studio</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/jrmwebimg/icons/logicicon.png`} alt="" />
                </div>
                <span className="mt-15">Logic Pro</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
           <p1>Zusätzlich zu den gängigen DAWs verfügen wir über eine umfangreiche Auswahl an branchenüblichen Plugins, darunter Waves Audio, Universal Audio, Izotope , Slate Digital, Antares Autotune, Melodyne und viele mehr.</p1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills