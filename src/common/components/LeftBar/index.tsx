import classes from './style.module.scss';
import logo from '../../assets/icons/logo-light.svg';
import settings from '../../assets/icons/settings.svg';
import burger from '../../assets/icons/burger.svg';
import mobLogo from '../../assets/icons/logo-tablet-vertical.svg'
import { Link } from 'react-router-dom';

export const LeftBar = () => {

  return <div className={classes['main-students__left-bar'] + ' ' + classes['header']}>
    <div className={classes['left-bar']}>
      <img className={classes['left-bar__icon']} src={logo} alt="" />
      <nav className={classes['left-bar__nav']}>
        <Link className={classes['left-bar__nav-item']} to="/admin/students/profile">Профиль</Link>
        <Link className={classes['left-bar__nav-item']} to="/courses">Курсы</Link>
        <Link className={classes['left-bar__nav-item']} to="/calendar">Расписание</Link>
        <Link className={classes['left-bar__nav-item']} to="/achievements">Портфолио</Link>
      </nav>
      <div className={classes['left-bar__controlling']}>
        <a href="/">
          <img className={classes['left-bar__settings']} src={settings} alt="" />
        </a>
        <a className={classes['left-bar__exit']} href='/'>Выход</a>
      </div>
    </div>

    <div className={classes['header-mob']}>
      <div className={classes['header-mob__nav']}>
        <img src={mobLogo} alt="" className={classes['header-mob__logo']} />

        <img src={burger} alt="" />
      </div>

      <div className={classes['header-mob__menu']}>
        <img className={classes['header-mob__menu-img']} src={mobLogo} alt="" />

        <ul className={classes['header-mob__menu-items']}>
          <li className={classes['header-mob__menu-item']}>
            <a className={classes['header-mob__menu-link']} href="/">Профиль</a>
          </li>
          <li className={classes['header-mob__menu-item']}>
            <a className={classes['header-mob__menu-link']} href="/">Курсы</a>
          </li>
          <li className={classes['header-mob__menu-item']}>
            <a className={classes['header-mob__menu-link']} href="/">Расписание</a>
          </li>
          <li className={classes['header-mob__menu-item']}>
            <a className={classes['header-mob__menu-link']} href="/">Портфолио</a>
          </li>
        </ul>

        <div className={classes['header-mob__controlling']}>
          <a href="/">
            <img className={classes['header-mob__settings']} src={settings} alt="" />
          </a>
          <a className={classes['header-mob__exit']} href='/'>Выход</a>
        </div>
      </div>
    </div>
  </div>

}