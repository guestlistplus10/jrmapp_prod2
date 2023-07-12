import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components


import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import Contact from '@/components/Freelancer/contact';





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
        <Contact />


      
      </main>
      <Footer />
    </>
  )
}

LandingPreview.getLayout = page => <Layout>{page}</Layout>

export default LandingPreview;