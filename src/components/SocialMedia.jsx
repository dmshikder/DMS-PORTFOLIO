import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target='_blank' href="https://github.com/dmshikder" rel="noreferrer"><BsGithub/></a>
        </div>
        <div>
            <a target='_blank' href="https://www.facebook.com/dmshikder21/" rel="noreferrer"><BsFacebook/></a>
        </div>
        <div>
            <a target='_blank'  href="https://www.linkedin.com/in/dmshikder/" rel="noreferrer"><BsLinkedin/></a>
        </div>
    </div>
  )
}

export default SocialMedia