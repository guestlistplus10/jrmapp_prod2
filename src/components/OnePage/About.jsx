import React from 'react';

function About() {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <h6 className="sub-title opacity-8 wow fadeInUp">Juniormafia Studios</h6>
              <h2 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">Qualität ist uns sehr wichtig!<span className="sub-font"></span></span>
                </span>

              </h2>
              <div className="text mt-20 wow fadeIn" data-wow-delay=".5s">
                <p>Deshalb nach Studio ist eingerichtet mit allem was wir brauchen, um deine Ideen festzuhalten. Du steuerst den kreativen Prozess, während wir uns um alle technischen Aspekte kümmern.</p>
              </div>
              <div className="stutas pt-40 mt-40 bord-thin-top">
                <div className="row">
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/dark/assets/imgs/jrmwebimg/studiopic/studiopic3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About