import React from 'react';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
function Header() {
  return <div className='header'>
          <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
          </IconButton>
          <img className='header__logo'
                src='https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png'
                alt='' />

          <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
          </IconButton>
        </div>;
}

export default Header;
