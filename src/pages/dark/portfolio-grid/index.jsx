import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';
import Header from '@/components/Portfolio/Header';
import ModernGrid from '@/components/Portfolio/ModernGrid';


function PortfolioModernGrid() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Modern Grid."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Modern Grid</title>
      </Head>

      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <ModernGrid />
      </main>
      <Footer subBg />
    </>
  )
}

PortfolioModernGrid.getLayout = page => <Layout>{page}</Layout>

export default PortfolioModernGrid;