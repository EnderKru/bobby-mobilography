import React, {useState} from 'react';
import './header.css';
import logo from '../../../assets/image/mobilography-logo.svg';
import burger from '../../../assets/image/lalafo.svg'
import { NavLink } from 'react-router-dom';


export  function Header() {

  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };



  return (
    <div className="container-header">
    <header className="header">
      <div className="conteiner">
        <div className="header-wrapper">
          <div className="header-logo">
            <NavLink>
            <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="header-menu">
            <ul className="header-list">
              <li className="header-item">
                <div onClick={() => scrollToElement(document.getElementById('banner'), 1000)}  >УЧАСТВОВАТЬ</div>
              </li>
              {/* <li className="header-item">
                <a href="/" >УЧАСТНИКИ</a>
              </li> */}

              <li className="header-item">
                <div onClick={() => scrollToElement(document.getElementById('footer'), 1000)} >СВЯЗАТЬСЯ С НАМИ</div>
              </li>
            </ul>   
            {/* <div className="custom-tooltip">
            <img src={burger} alt="Mini Photo" className="mini-photo" id="person" />
              <div className="tooltiptext">
                <a href='' className='burger-item'>ОБЩАЯ ИНФОРМАЦИЯ</a>
                <a href='' className='burger-item'>УЧАСТНИКИ</a>
                <a href='' className='burger-item'>СВЯЗАТЬСЯ С НАМИ</a>
              </div>
          </div> */}
          </div>

        </div>
      </div>
    </header>
    </div>
  );
}