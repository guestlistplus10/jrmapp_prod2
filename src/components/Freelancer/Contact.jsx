import React from 'react';

function zeigePopup() {
  alert("Dies ist ein Popup-Fenster!");
}

 function Contact() {
  return (
    <section className="contact-crev section-padding" data-scroll-index="7">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head md-mb80">
              <h2 className="fz-50">Du willst mit uns arbeiten?</h2>
              <p className="fz-15 mt-10">Schreib uns eine Nachricht auf Instagram und wir melden uns bei dir!</p>

              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                <a href="https://www.instagram.com/jrmrecords_/?hl=de" className="hover-this" target="_blank"><span className="hover-anim">Instagram</span></a>
                </li>
                <li>
                <a href="https://www.tiktok.com/@juniormafiaofficial?_t=8dSxx7JbJ5n&_r=1" className="hover-this" target="_blank"><span className="hover-anim">TikTok</span></a>
                </li>
              </ul>
            </div>
          </div>
          {/*
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">

                <div className="messages"></div>

                <div className="controls row">

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name"
                        required="required" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email"
                        required="required" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="Thema" placeholder="Thema" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="Nachricht" placeholder="Nachricht" rows="4"
                        required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button onclick="zeigePopup()" className="butn butn-full butn-bord radius-30">
                        <span className="text">Absenden!</span>
                      </button>
                    </div>
                  </div>

                </div>  
              </form>  
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default Contact