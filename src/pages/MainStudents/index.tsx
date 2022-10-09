// import { useState } from 'react';
// import logo from '../../common/assets/icons/logo.svg';
import classes from './style.module.scss';
import logo from '../../common/assets/icons/logo-light.svg';
import settings from '../../common/assets/icons/settings.svg';
// import bcrypt from 'bcryptjs';
// import {Title as H1} from '../../common/components/H1'

export const MainStudents = () => {

  return <div className={classes['container'] + ' ' + classes['main-students']}>

    <div className={classes['main-students__left-bar'] + ' ' + classes['left-bar']}>
      <img className={classes['left-bar__icon']} src={logo} alt="" />
      <nav className={classes['left-bar__nav']}>
        <a className={classes['left-bar__nav-item']} href="/">Профиль</a>
        <a className={classes['left-bar__nav-item']} href="/">Курсы</a>
        <a className={classes['left-bar__nav-item']} href="/">Расписание</a>
        <a className={classes['left-bar__nav-item']} href="/">Портфолио</a>
      </nav>
      <div className={classes['left-bar__controlling']}>
        <img className={classes['left-bar__settings']} src={settings} alt="" />
        <p className={classes['left-bar__exit']}>Выход</p>
      </div>
    </div>

    <div>
      123
    </div>
  </div>
}