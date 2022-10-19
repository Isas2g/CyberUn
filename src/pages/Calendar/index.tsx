import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarBlock } from './components/CalendarBlock'
import { CalendarLessons } from './components/CalendarLessons'

export const Calendar = () => {
  return <div className={classes['container'] + ' ' + classes['calendar']}>
    <LeftBar />

    <div className={classes['calendar__body']}>
      
      <CalendarHeader title='Август 2022'/>

      <CalendarBlock />

      <CalendarLessons />
    </div>
  </div>
}