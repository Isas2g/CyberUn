import classes from './style.module.scss'

import { Title as H2 } from '../../../../common/components/H2'
import { CalendarLesson } from './components/CalendarLesson'

export const CalendarLessons = () => {
  return <div className={classes['calendar__lessons']}>
    <H2 text='Занятия на этой неделе:' />
    <ul className={classes['calendar__lessons-list']}>
      <CalendarLesson styles={{ color: '#6E14AC' }} paragraphs={['1 августа, 14:00, Физика', 'Необходимо выполнять домашнее задание', 'Онлайн /Адерс площадки']} />
    </ul>
  </div>
}  