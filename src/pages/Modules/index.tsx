import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import { CourseBlock } from '../../common/components/CourseBlock'

import redStar from '../../common/assets/icons/star-red.svg'

export const Modules = () => {
  return <div className={classes['container'] + ' ' + classes['modules']}>
    <LeftBar />

    <div className={classes['modules__body']}>
      <div className={classes['modules__inner']}>
        <div className={classes['modules__course-title']}>
          <H1 text='Курс:' />
          <H1 text='Система жизней' />
        </div>

        <div className={classes['modules__course-name']}>
          <H1 text='ЕГЭ: Физика' color='red' />
          <div className={classes['modules__course-stars']}>
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
          </div>
        </div>

        <div className={classes['modules__near-modules'] + ' ' + classes['near-modules']}>
          <div className={classes['near-modules__current']}>
            <H1 text='Текущий модуль' />
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Молекулярно кинетическая теория газов (МКТ)' 
              styles={{
                background: 'linear-gradient(273.48deg, #EE5D5D -26.77%, #FE6356 97.74%)',
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className={classes['near-modules__next']}>
            <H1 text='Следующий модуль' />
            <CourseBlock 
            title='Модуль 2:' 
            subtitle='Ядерная, атомная, квантовая физика.' 
            styles={{
              background: 'linear-gradient(273.48deg, #EE5D5D -26.77%, #FE6356 97.74%)',
              margin: '10px 0 0 0'
            }}
            />
          </div>
        </div>

        <div className={classes['modules__passed-modules'] + ' ' + classes['passed-modules']}>
          <H1 text='Пройденные модули' />
          <div className={classes['passed-modules__modules']}>
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Длинное название модуля' 
              styles={{
                background: '#faafac',
                margin: '10px 0 0 0'
              }}
            />
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Длинное название модуля' 
              styles={{
                background: '#faafac',
                margin: '10px 0 0 0'
              }}
            />
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Длинное название модуля' 
              styles={{
                background: '#faafac',
                margin: '10px 0 0 0'
              }}
            />
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Длинное название модуля' 
              styles={{
                background: '#faafac',
                margin: '10px 0 0 0'
              }}
            />
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Длинное название модуля' 
              styles={{
                background: '#faafac',
                margin: '10px 0 0 0'
              }}
            />
            <CourseBlock 
              title='Модуль 1:' 
              subtitle='Длинное название модуля' 
              styles={{
                background: '#faafac',
                margin: '10px 0 0 0'
              }}
            />
          </div>
        </div>
      </div>
      <a href='/'>Посмотреть еще курсы &#62;</a>
    </div>
  </div>
}