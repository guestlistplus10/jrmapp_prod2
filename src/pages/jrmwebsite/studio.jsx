import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components


import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import Skills from '@/components/Freelancer/Skills';
import Services from '@/components/CreativeAgency/Services';

import Header from '@/components/OnePage/Header';
import About from '@/components/OnePage/About';


import Footer from '@/components/Startup/Footer';


function LandingPreview() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Studio</title>
      </Head>
      <main>
      <Navigation />
      <Menu />
        <Header />
        <About/>      
      </main>
      <Footer />
    </>
  )
}

LandingPreview.getLayout = page => <Layout>{page}</Layout>

export default LandingPreview;