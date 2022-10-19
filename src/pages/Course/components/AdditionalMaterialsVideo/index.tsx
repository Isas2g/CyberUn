import classes from './style.module.scss'

import { Title as H1 } from '../../../../common/components/H1'

import icon from '../../../../common/assets/icons/additional-icon.svg'
import videoCover from '../../../../common/assets/img/video-cover.jpg'

export const AdditionalMaterialsVideo = () => {
  return <div className={classes['course__additional-materials'] + ' ' + classes['additional-materials']}>
    <div className={classes['additional-materials__video']}>
      <img src={videoCover} alt="" />
    </div>

    <div className={classes['additional-materials__body']}>
      <H1 text='Доп. материалы:' styles={{ textAlign: 'center' }} />

      <ul className={classes['additional-materials__list']}>
        <li className={classes['additional-materials__item']}>
          <div className={classes['additional-materials__image-block']}>
            <img src={icon} alt="" />
            <p className={classes['additional-materials__name']}>Схема №1</p>
          </div>
          <a href="/" className={classes['additional-materials__download']}>Скачать</a>
        </li>
        <li className={classes['additional-materials__item']}>
          <div className={classes['additional-materials__image-block']}>
            <img src={icon} alt="" />
            <p className={classes['additional-materials__name']}>Схема №1</p>
          </div>
          <a href="/" className={classes['additional-materials__download']}>Скачать</a>
        </li>
        <li className={classes['additional-materials__item']}>
          <div className={classes['additional-materials__image-block']}>
            <img src={icon} alt="" />
            <p className={classes['additional-materials__name']}>Схема №1</p>
          </div>
          <a href="/" className={classes['additional-materials__download']}>Скачать</a>
        </li>
        <li className={classes['additional-materials__item']}>
          <div className={classes['additional-materials__image-block']}>
            <img src={icon} alt="" />
            <p className={classes['additional-materials__name']}>Схема №1</p>
          </div>
          <a href="/" className={classes['additional-materials__download']}>Скачать</a>
        </li>
      </ul>
    </div>

  </div>
}