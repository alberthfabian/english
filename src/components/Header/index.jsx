import React from 'react';
import { Head } from './style';
import logo from '../../Img/logo.png';

const Header = () => {
  return (
    <Head>
      <img src={logo} alt='Logo'/>
    </Head>
  )
};

export default Header;