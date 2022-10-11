import classes from './style.module.scss'
import { Title as H3 } from '../H3'
import { Title as H4 } from '../H4'
import rightArrow from '../../assets/icons/right-arrow.svg';

interface Props {
  title: string,
  subtitle?: string,
  styles?: Object,
  date?: string
}

export const CourseBlock = ({title, subtitle, date, styles}: Props) => {
  return <div style={styles} className={classes['main-content__course'] + ' ' + classes['course']}>
    <div className={classes['course__text']}>
      <H3 text={title} />
      {subtitle && <H4 text={subtitle} />}
      {date && <p className={classes['course__date']}>{date}</p>}
      
    </div>
    <img src={rightArrow} alt="" className={classes['course__arrow']} />
  </div>
}

