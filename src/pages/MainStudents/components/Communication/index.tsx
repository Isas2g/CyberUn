import classes from './style.module.scss';
import { TeacherCommunication } from '../TeacherCommunication';
import {Title as H1} from '../../../../common/components/H1'


import teacherImage from '../../../../common/assets/img/teacher-image.jpg'

export const Communication = () => {
  return <div className={classes['main-content__communication'] + ' ' + classes['communication']}>
    <H1 text='Связь с преподавателем' />
    <TeacherCommunication image={teacherImage} name='Фамилия Имя Отчество' direction='Программирование' />
  </div>
}