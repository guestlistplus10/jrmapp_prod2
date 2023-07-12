import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components


import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';

import ParallaxSlider from '@/components/Showcases/ParallaxSlider';
import Services from '@/components/DigitalAgency/Services';
import Portfolio from '@/components/DigitalAgency/Portfolio';
import Team from '@/components/OnePage/Team';
import Footer from '@/components/Startup/Footer';
import Intro from '@/components/Architecture/Intro';
import {Startingvideo} from '@/components/jrm/startingvideo';



function LandingPreview() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Juniormafia</title>
      </Head>
      <main>
      <Navigation/>
      <Menu/>
      <Startingvideo/>
      <Intro/>
      <Services/>
      <Portfolio/>
      <Team/>

      
      </main>
      <Footer/>
    </>
  )
}

LandingPreview.getLayout = page => <Layout>{page}</Layout>

export default LandingPreview;