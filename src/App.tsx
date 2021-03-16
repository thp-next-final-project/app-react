import React from 'react';
import { Navbar } from './components/layout/nav/index';
import { Footer } from './components/layout/footer/index';
import { Homepage } from './pages/homepage/index';



const App = (): JSX.Element => {
  return (
   <>
    <Navbar/>
    <Homepage/>
    <Footer/>
   </>
  );
};

export default App;
