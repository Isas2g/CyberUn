import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import { CourseBlock } from '../../common/components/CourseBlock'

import redStar from '../../common/assets/icons/star-red.svg'

export const Lessons = () => {
  return <div className={classes['container'] + ' ' + classes['lessons']}>
    <LeftBar />

    <div className={classes['lessons__body']}>
      <div className={classes['lessons__course-title']}>
        <H1 text='Курс:' />
        <H1 text='Система жизней' />
      </div>

      <div className={classes['lessons__course-name']}>
        <H1 text='ЕГЭ: Физика' color='red' />
        <div className={classes['lessons__course-stars']}>
          <img src={redStar} alt="" />
          <img src={redStar} alt="" />
          <img src={redStar} alt="" />
          <img src={redStar} alt="" />
          <img src={redStar} alt="" />
        </div>
      </div>

      <div className={classes['lessons__description']}>
        <p>
        Статика - раздел механики, изучающий законы равновесия тел. Импульс- векторная физ.вел., 
        количественная характеристика меры движения. Закон сохранения импульса описывает взаимодействие тел.  
        Энергия - скалярная физ.вел. Закон сохранения энергии описывает превращение энергии при изменении положения 
        тела в пространстве.  В этом модуле вы:
        </p>
        <ul className={classes['lessons__description-list']}>
          <li>узнаете принцип решения задач на статику. Статика - один из самых плохо-разбираемых разделов физики в школах. Мы это исправим!</li>
          <li>научитесь описывать взаимодействие тел с помощью импульса</li>
          <li>работать векторно с импульсами нескольких тел</li>
          <li>рассчитывать различные параметры при изменении энергии тел</li>
          <li>описывать превращения энергии в колебательных системах</li>
          <li>сможете решать задачи из ЕГЭ типа  1,2,3,4,6,7,8 (1 часть), 25,30 задания (2 часть), относящиеся к данному разделу</li>
        </ul>
      </div>

      <div className={classes['lessons__near-lessons'] + ' ' + classes['near-lessons']}>
        <div className={classes['near-lessons__current']}>
          <H1 text='Текущий урок' />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Молекулярно кинетическая теория газов (МКТ)' 
            date='20 агуста 2022, 14:00'
            styles={{
              background: 'linear-gradient(273.48deg, #EE5D5D -26.77%, #FE6356 97.74%)',
              margin: '10px 0 0 0'
            }}
          />
        </div>
        <div className={classes['near-lessons__next']}>
          <H1 text='Следующий урок' />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Ядерная, атомная, квантовая физика.' 
            date='20 агуста 2022, 14:00'
            styles={{
              background: 'linear-gradient(273.48deg, #EE5D5D -26.77%, #FE6356 97.74%)',
              margin: '10px 0 0 0'
            }}
          />
        </div>
      </div>

      <div className={classes['modules__passed-lessons'] + ' ' + classes['passed-lessons']}>
        <H1 text='Пройденные уроки' />
        <div className={classes['passed-lessons__lessons']}>
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Название урока' 
            styles={{
              background: '#faafac',
              margin: '10px 0 0 0'
            }}
          />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Название урока' 
            styles={{
              background: '#faafac',
              margin: '10px 0 0 0'
            }}
          />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Название урока' 
            styles={{
              background: '#faafac',
              margin: '10px 0 0 0'
            }}
          />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Название урока' 
            styles={{
              background: '#faafac',
              margin: '10px 0 0 0'
            }}
          />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Название урока' 
            styles={{
              background: '#faafac',
              margin: '10px 0 0 0'
            }}
          />
          <CourseBlock 
            title='Урок 10:' 
            subtitle='Название урока' 
            styles={{
              background: '#faafac',
              margin: '10px 0 0 0'
            }}
          />
        </div>
      </div>
    </div>
  </div>
}