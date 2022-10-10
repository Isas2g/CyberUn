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
            {/* Как убрать отступы у этих компонентов */}
            <CourseBlock title='Программирование на Python, создание игр и простых приложений' subtitle='Урок 5: навание урока ' />
            <CourseBlock title='Олимпиадная математика' subtitle='Урок 4: навание урока ' />
          </div>
        </div>
        
        <div className={classes['courses__finished-courses'] + ' ' + classes['finished-courses']}>
          <H1 text='Пройденные курсы' />
          <div className={classes['courses__courses-block']}>
            <CourseBlock title='Олимпиадная математика' subtitle='' />
            <CourseBlock title='Олимпиадная математика' subtitle='' />
          </div>
        </div>
      </div>

      <a href='/'>Посмотреть еще курсы &#62;</a>
    </div>
  </div>
}