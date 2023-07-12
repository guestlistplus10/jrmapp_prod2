import React from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';
import ParallaxSlider from '@/components/Showcases/ParallaxSlider';
import Portfolio from '@/components/MarketingAgency/Portfolio';

function ShowcaseParallaxSlider() {
  return (
    <>
      <Head>
        <title>Geekfolio - Parallax Slider</title>
      </Head>

      <Navigation />
      <Menu />
      <main>
        <ParallaxSlider />
        <Portfolio/>
      </main>
    </>
  )
}

ShowcaseParallaxSlider.getLayout = page => <Layout>{page}</Layout>

export default ShowcaseParallaxSlider;