import classes from './style.module.scss';
import logo from '../../assets/icons/logo-light.svg';
import settings from '../../assets/icons/settings.svg';

export const LeftBar = () => {

  return <div className={classes['main-students__left-bar'] + ' ' + classes['left-bar']}>
    <img className={classes['left-bar__icon']} src={logo} alt="" />
    <nav className={classes['left-bar__nav']}>
      <a className={classes['left-bar__nav-item']} href="/">Профиль</a>
      <a className={classes['left-bar__nav-item']} href="/">Курсы</a>
      <a className={classes['left-bar__nav-item']} href="/">Расписание</a>
      <a className={classes['left-bar__nav-item']} href="/">Портфолио</a>
    </nav>
    <div className={classes['left-bar__controlling']}>
      <a href="/">
        <img className={classes['left-bar__settings']} src={settings} alt="" />
      </a>
      <a className={classes['left-bar__exit']} href='/'>Выход</a>
    </div>
  </div>

}