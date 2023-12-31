import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Blog/Header';
import ImageOutFrame from '@/components/InnerPages/Blog/ImageOutFrame';
import Footer from '@/components/Startup/Footer';


function BlogImageOutFrameLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Image Out Frame</title>
      </Head>

      <Navbar mainBg lightMode />
      <main className="main-bg">
        <Header data={metadata} />
        <ImageOutFrame />
      </main>
      <Footer lightMode />
    </>
  )
}

BlogImageOutFrameLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default BlogImageOutFrameLight;