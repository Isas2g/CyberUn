import classes from './style.module.scss'
import playIcon from '../../../../common/assets/icons/play-btn.svg';

import { Title as H1 } from '../../../../common/components/H1';
import { Title as H2 } from '../../../../common/components/H2';

import icon from '../../../../common/assets/icons/additional-icon.svg'

type Type = 'video'

interface Props {
  type?: Type;
  hasVideo?: Boolean;
}

export const AdditionalMaterials = ({type, hasVideo = false}: Props) => {
  return <div className={classes['course__additional-materials'] + ' ' + classes['additional-materials']}>

  <div className={classes['materials-content']}>
    {hasVideo && <div>
      <div className={classes['additional-materials__video']}>
        <div className={classes['video__btn']}>
          <img src={playIcon} className={classes['btn__play']} alt="" />
          <div className={classes['btn__pause']}></div>
        </div>
      </div>
      <H2 color='yellow' text='Начало 22 августа, 12:00' />
    </div>}
    <div>
      <H1 styles={{marginBottom: 20}} text={hasVideo ? 'Доп. материалы:' : 'Дополнительные материалы:'} />
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
  </div>
</div>
}