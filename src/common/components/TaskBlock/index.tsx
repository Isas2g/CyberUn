import classes from './style.module.scss'

import taskIcon from '../../assets/icons/task-icon.svg'
import rightArrowDark from '../../assets/icons/right-arrow-dark.svg'

// enum Colors {
//   black='black',
//   purple='purple'
// }

interface Props {
  title: string,
  subtitles: Array<string>
}

export const TaskBlock = ({title, subtitles}: Props) => {
  console.log(subtitles)
  return <div className={classes['homework__task'] + ' ' + classes['task']}>
    <div className={classes['task__icon']}>
      <img src={taskIcon} alt="" />
    </div>
    <div className={classes['task__text']}>
      <p className={classes['task__title']}>{title}</p>
      <div className={classes['task__subtitles']}>
        {
          subtitles.map((subtitle, index) => {
            return subtitles.length -1 === index 
            ? <p key={index} className={classes['task__subtitle']}>{subtitle}</p>
            : (
              // Здесь как-то сделать так, чтобы ставилась точка (на div есть стили, но его нельзя ставить сторым элементом в условии)
              <p key={index} className={classes['task__subtitle']}>{subtitle}</p>
            )
          })
        }
      </div>
    </div>
    <a href="/">
      <img src={rightArrowDark} alt="" />
    </a>
  </div>
}

