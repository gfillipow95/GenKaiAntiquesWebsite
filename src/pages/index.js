import React from 'react';
import Header from './components/header';
import About from './components/about';
import ShowDates from './components/showDates';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Header />
      <ShowDates />
      <About />
    </>
  )
}
