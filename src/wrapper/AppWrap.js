import React from 'react';
import { SocialMedia } from '../components';
import NavigationDots from '../components/NavigationDots';

const AppWrap = (Component, idName, classNames) => function HOC() {
    // const date = new Date().getFullYear();

    return(
    
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Component/>

        </div>

        {/* <div className='copyright'>
            <p className='p-text'> &copy; {date} </p>

        </div> */}
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap