import classes from './style.module.scss'

import { Title as H1 } from '../../../../common/components/H1'

import icon from '../../../../common/assets/icons/additional-icon.svg'

export const AdditionalMaterials = () => {
  return <div className={classes['course__additional-materials'] + ' ' + classes['additional-materials']}>
  <H1 text='Дополнительные материалы:' />

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
    <li className={classes['additional-materials__item']}>
      <div className={classes['additional-materials__image-block']}>
        <img src={icon} alt="" />
        <p className={classes['additional-materials__name']}>Схема №1</p>
      </div>
      <a href="/" className={classes['additional-materials__download']}>Скачать</a>
    </li>
  </ul>
</div>
}