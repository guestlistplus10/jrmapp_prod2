import React from 'react';
import Link from 'next/link';
//= Components
import StatementSplitter from '../Common/StatementSplitter';
//= Data
import data from '@/data/DigitalAgency/services.json';

function Services({ lightMode }) {
  return (
    <section className="custom-row services section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">Vom Talent zur Marke!</span>
                  <p>Juniormafia bietet eine 360-Grad-Betreuung an und deckt damit alle Punkte um die Bildung eines Artists ab.</p>
                </span>
                
              </h3>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="full-width d-flex justify-content-end justify-end">
                <div className="vew-all">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <div className={`item-bord2 radius-10 wow fadeIn ${index !== data.length - 1 ? 'md-mb50' : ''}`} data-wow-delay=".5s">
                  <div className="icon-img-60 mb-40">
                    <img src={`${lightMode ? '/light/' : '/dark/'}${item.image}`} alt="" />
                  </div>
                  <h6 className="mb-30"><StatementSplitter statement={item.title} /></h6>
                  <ul className="check-list rest opacity-8">
                    {
                      item.features.map((feature, idx) => (
                        <li className="mb-10" key={idx}>
                          <span className="fz-12 mr-5"><i className="fas fa-check"></i></span> {feature}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services