import React from 'react';

function About() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding">
                      <div>
                <br/>
                <br/>
                <br/>
   
          </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1">
                <img src="/dark/assets/imgs/jrmwebimg/P1000446.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/dark/assets/imgs/jrmwebimg/mikro.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="cont">
              <div className="text">
                <h3>FAQ</h3>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Kann ich Begleitung in die Sessions mitnehmen?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Ja aber bitte gib uns vorher Bescheid viele Personen kommen.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Kann ich das Studio mit ÖPNV erreichen?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Ja, aber trotz Standort Mannheim ist die Anbindung nicht die beste und wir empfehlen mit dem Auto oder Uber zu kommen.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Wo ist das Studio?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">In Mannheim, aber da wir kein öffentliches Studio sind, wird der Standort vom Studio mit der Terminvereinbarung rausgegeben.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Kann ich dort parken?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Ja wir haben mehr als genug Parkmöglichkeiten direkt vor dem Studio.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Kann ich das Studio für mich alleine mieten?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Nein, wir vermieten unser Studio leider nicht.</p>
                  </div>
              </div>
              </div>
            </div>
            </div>
                <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
   
          </div>
        </div>
      </div>
    </section>
  )
}

export default About