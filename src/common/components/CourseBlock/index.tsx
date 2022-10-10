import classes from './style.module.scss'
import { Title as H3 } from '../H3'
import { Title as H4 } from '../H4'
import rightArrow from '../../assets/icons/right-arrow.svg';

// enum Colors {
//   black='black',
//   purple='purple'
// }

interface Props {
  title: string,
  subtitle: string,
  // color: Colors
}

export const CourseBlock = ({title, subtitle}: Props) => {

  return <div className={classes['main-content__course'] + ' ' + classes['course']}>
    <div className={classes['course__text']}>
      <H3 text={title} />
      <H4 text={subtitle} />
    </div>
    <img src={rightArrow} alt="" className={classes['course__arrow']} />
  </div>
}

