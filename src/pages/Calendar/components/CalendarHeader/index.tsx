import classes from './style.module.scss'

import plus from '../../../../common/assets/icons/plus-light.svg'

import { Title as H1 } from '../../../../common/components/H1'


interface Props {
  title: string
}

export const CalendarHeader = ({ title }: Props) => {
  return <div className={classes['calendar__head']}>
    <H1 text={title} />
    <div className={classes['calendar__plus']}>
      <img src={plus} alt="" />
    </div>
  </div>
}