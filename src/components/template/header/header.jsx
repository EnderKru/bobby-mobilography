
import './header.css';
import logo from '../../../assets/image/mobilography-logo.svg';
import burger from '../../../assets/image/burger-menu.svg'
import { NavLink } from 'react-router-dom';


export  function Header() {

  return (
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
                <a href="/" className="header-link">ОБЩАЯ ИНФОРМАЦИЯ</a>
              </li>
              <li className="header-item">
                <a href="/" className="header-link">СМОТРЕТЬ</a>
              </li>
              <li className="header-item">
                <a href="/" className="header-link">УЧАСТНИКИ</a>
              </li>
              <li className="header-item">
                <a href="/" className="header-link">СВЯЗАТЬСЯ С НАМИ</a>
              </li>
            </ul>   
            <div className="custom-tooltip">
            <img src={burger} alt="Mini Photo" className="mini-photo" id="person" />
              <div className="tooltiptext">
                <a href='' className='burger-item'>ОБЩАЯ ИНФОРМАЦИЯ</a>
                <a href='' className='burger-item'>СМОТРЕТЬ</a>
                <a href='' className='burger-item'>УЧАСТНИКИ</a>
                <a href='' className='burger-item'>СВЯЗАТЬСЯ С НАМИ</a>
              </div>
          </div>
          </div>

        </div>
      </div>
    </header>
  );
}