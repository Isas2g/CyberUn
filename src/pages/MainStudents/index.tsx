import classes from './style.module.scss';

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import { CourseBlock } from '../../common/components/CourseBlock'
import { TaskBlock } from '../../common/components/TaskBlock'
import { Calendar } from '../../common/components/Calendar'
import { Communication } from './components/Communication';

import taskIcon from '../../common/assets/icons/task-icon.svg'


export const MainStudents = () => {

  return <div className={classes['container'] + ' ' + classes['main-students']}>

    <LeftBar />

    <div className={classes['main-students__main-content'] + ' ' + classes['main-content']}>
      <div className={classes['main-content__block']}>
        <H1 text='Привет, Владимир!' color='purple' />
        <div className={classes['main-content__courses']}>
          <H1 text='Мои курсы'/>
          <CourseBlock
            title='Программирование на Python, создание игр и простых приложений' 
            subtitle='Модуль 5, урок 5: навание урока'
            styles={{
              margin: '20px 0 0 0'
            }}
          />
          <CourseBlock 
            title='Олимпиадная математика' 
            subtitle='Модуль 5, урок 5: навание урока' 
            styles={{
              background: 'linear-gradient(273.48deg, #479CA3 -26.77%, #235291 97.74%)',
              margin: '15px 0 0 0'
            }}
          />
          <a href='/' className={classes['main-content__courses-all']}>Посмотреть пройденные курсы &#62;</a>
        </div>

        <div className={classes['main-content__homework'] + ' ' + classes['homework']}>
          <H1 text='Домашние задания:' />
          <TaskBlock 
            title='Очень длинный текст домашнего задания' 
            subtitles={['Программирование', 'Код', '25 августа']} 
            icon={taskIcon}
            styles={{background: 'linear-gradient(80.75deg, #FFA800 -1.74%, #FFB118 92.47%)'}}
          />
          <TaskBlock 
            title='Очень длинный текст домашнего задания' 
            subtitles={['Программирование', 'Код', '25 августа']}
            icon={taskIcon}
            styles={{background: 'linear-gradient(0deg, #6E14AC, #6E14AC)'}}
          />
        </div>
      </div>

      <div className={classes['main-content__block']}>
        <H1 text='Расписание' />
        <Calendar />
        <p className={classes['main-content__upcoming-lessons']}>Ближайшие занаятия:</p>
        <div className={classes['main-content__lessons']}>
          <p className={classes['main-content__lesson']}>
            <span>5 августа 2022</span>
            <span>Название урока</span>
          </p>

          <hr className={classes['main-content__lessons-line']} />

          <p className={classes['main-content__lesson']}>
            <span>5 августа 2022</span>
            <span>Название урока</span>
          </p>
        </div>
        <Communication />
      </div>
    </div>
  </div>
}