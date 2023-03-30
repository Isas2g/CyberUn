import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import { CourseBlock } from '../../common/components/CourseBlock'

export const Courses = () => {
  return <div className={classes['container'] + ' ' + classes['courses']}>
    <LeftBar />

    <div className={classes['courses__body']}>
      <div className={classes['courses__inner']}>
        <div className={classes['courses__my-courses'] + ' ' + classes['my-courses']}>
          <H1 text='Мои курсы' />
          <div className={classes['courses__courses-block']}>
            <CourseBlock 
              title='Программирование на Python, создание игр и простых приложений' 
              subtitle='Урок 5: навание урока'
              styles={{background: 'linear-gradient(80.75deg, #FFA800 -1.74%, #FFB118 92.47%)'}}
            />
            <CourseBlock 
              title='Олимпиадная математика' 
              subtitle='Урок 4: навание урока'
              styles={{background: 'linear-gradient(273.48deg, #479CA3 -26.77%, #235291 97.74%)'}}
            />
          </div>
        </div>
        
        <div className={classes['courses__finished-courses'] + ' ' + classes['finished-courses']}>
          <H1 text='Пройденные курсы' />
          <div className={classes['courses__courses-block']}>
            <CourseBlock 
              title='Олимпиадная математика' 
              styles={{background: '#b689d5'}}
            />
            <CourseBlock 
              title='Олимпиадная математика' 
              styles={{background: '#b3d7a1'}}
            />
          </div>
        </div>
      </div>

      <a href='/'>Посмотреть еще курсы &#62;</a>
    </div>
  </div>
}