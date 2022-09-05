import React from 'react';
import './Footer.scss';

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <>
    <p className='app__footer'>Copyright &copy; {date} Dost Mohammad Shikder</p>
    </>
  )
}

export default Footer