import classes from './style.module.scss'

interface Object {
  date: string,
  subject: string
}

interface Props {
  day: number,
  lessons?: Array<Object>
}

export const CalendarDayBlock = ({day, lessons}: Props) => {

  return <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
    <p className={classes['day-block__day']}>{day}</p>

    <div className={classes['day-block__schedule']}>
      {
        lessons ? (
          lessons.map((lesson, index) => {
            return <div key={index} className={classes['day-block__lesson']}>{lesson.date}, {lesson.subject}</div>
          })
        ) : (
          <div></div>
        )
        
      }
    </div>
  </div>
}