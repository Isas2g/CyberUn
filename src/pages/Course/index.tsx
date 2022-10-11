import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import {Title as H2} from '../../common/components/H2'
import {Title as H4} from '../../common/components/H4'

import icon from '../../common/assets/icons/additional-icon.svg'

export const Course = () => {
  return <div className={classes['container'] + ' ' + classes['course']}>
    <LeftBar />

    <div className={classes['course__body']}>
      <a href="/" className={classes['course__back']}>&#60; Назад</a>
      <H1 text='Курс: '/>
      <H1 text='Программирование на Python, создание игр и простых приложений' color='yellow' styles={{width: '70%', margin: '20px 0 0 0'}} />

      <div className={classes['course__module']}>
        <H2 text="Модуль 5, урок 2: название урока" />
        <H4 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla orci vel mauris laoreet pharetra. 
            Sed placerat dignissim tellus, sed commodo metus aliquet quis. Curabitur et laoreet lacus. In feugiat lacus sapien, 
            in tempus tortor laoreet id. Donec ultrices tempor massa, non rhoncus velit. Maecenas et neque eu nisl lacinia aliquet. 
            Phasellus luctus arcu magna, quis bibendum elit mattis sit amet. Maecenas laoreet tellus ante, sit amet ultrices nunc 
            commodo nec. Cras enim orci, suscipit eget lorem nec, commodo consequat purus. Sed quis mauris ac mauris 
            tincidunt porttitor. Aliquam quam risus, auctor eleifend dui sollicitudin, tempor consequat tellus. 
            Quisque blandit ligula eu neque accumsan, pharetra sagittis nisl finibus.' 
          color='black'
          styles={{ fontSize: '10', fontWeight: '600', margin: '5px 0 0 0' }}
        />
      </div>

      <div className={classes['course__additional-materials'] + ' ' + classes['additional-materials']}>
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

      <div className={classes['course__homework'] + ' ' + classes['homework']}>
        <H1 text='Домашее задание:' styles={{ margin: '20px 0 0 0' }} />
        <H4 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla orci vel mauris laoreet pharetra. 
          Sed placerat dignissim tellus, sed commodo metus aliquet quis. Curabitur et laoreet lacus. 
          In feugiat lacus sapien, in tempus tortor laoreet id. Donec ultrices tempor massa, non rhoncus velit. 
          Maecenas et neque eu nisl lacinia aliquet. Phasellus luctus arcu magna, quis bibendum elit mattis sit amet. 
          Maecenas laoreet tellus ante, sit amet ultrices nunc commodo nec. Cras enim orci, suscipit eget lorem nec, commodo 
          consequat purus. Sed quis mauris ac mauris tincidunt porttitor. Aliquam quam risus, auctor eleifend dui sollicitudin, 
          tempor consequat tellus. Quisque blandit ligula eu neque accumsan, pharetra sagittis nisl finibus.' 
          color='black'
          styles={{ fontSize: '10', fontWeight: '600', margin: '5px 0 0 0' }}
        />
      </div>
    </div>
  </div>
}