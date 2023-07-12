import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';
import Header from '@/components/Portfolio/Header';
import ClassicGrid from '@/components/Portfolio/ClassicGrid';


function PortfolioClassicGridLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Classic Grid."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Classic Grid</title>
      </Head>

      <Navbar mainBg lightMode />
      <main>
        <Header data={metadata} />
        <ClassicGrid />
      </main>
      <Footer subBg lightMode />
    </>
  )
}

PortfolioClassicGridLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default PortfolioClassicGridLight;