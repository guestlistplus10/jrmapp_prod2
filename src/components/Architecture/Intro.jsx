import React from 'react';

function Intro() {
  return (
    <section className="intro-imgs section-padding custom-row2">
      <div className="container">
        <div className="sec-leter-head mb-80">
          <div className="d-flex align-items-center">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 valign">
            <div className="img1 to-up full-width md-mb50">
              <img src="/dark/assets/imgs/jrmwebimg/mikro.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width md-mb50">     
              <h3 className="mb-15">Juniormafia,</h3>
              <p>gegründet von Coco und Guestlist +10, bietet eine umfassende Betreuung für talentierte Newcomer an und unterstützt sie auf ihrem Weg nach oben.</p>

              <div className="stauts d-flex align-items-center mt-40">
                <div>
                  <h4>2020</h4>
                  <p>Gegründet</p>
                </div>
                <div className="ml-auto">
                  <h4> &gt; 1 Mio</h4>
                  <p>Streams</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img1">
              <img src="/dark/assets/imgs/jrmwebimg/studiopic/studiopic2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro