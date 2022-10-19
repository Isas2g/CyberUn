import classes from './style.module.scss'

interface Props {
  paragraphs: Array<string>,
  styles?: Object
}

export const CalendarLesson = ({ paragraphs, styles }: Props) => {
  return <li style={styles} className={classes['calendar__lesson']}>
    {
      paragraphs.map(paragraph => {
        return <p>{paragraph}</p>
      })
    }
  </li>
}