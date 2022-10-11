import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import {Title as H2} from '../../common/components/H2'
// import { CourseBlock } from '../../common/components/CourseBlock'

import diploma from '../../common/assets/img/diploma.png'

export const Achievements = () => {
  return <div className={classes['container'] + ' ' + classes['achievements']}>
    <LeftBar />

    <div className={classes['achievements__body']}>
      <H1 text='Мои успехи:' />
      <div className={classes['achievements__course']}>
        <H2 text='Название курса' />
        <ul className={classes['achievements__list']}>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
        </ul>
      </div>
      <div className={classes['achievements__course']}>
        <H2 text='Название курса' />
        <ul className={classes['achievements__list']}>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
          <li className={classes['achievements__item']}>
            <img src={diploma} alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
}