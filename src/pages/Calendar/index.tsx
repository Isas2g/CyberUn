import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarBlock } from './components/CalendarBlock'
import { CalendarLessons } from './components/CalendarLessons'
import { Calendar as CalendarMob } from '../../common/components/Calendar'

export const Calendar = () => {
  return <div className={classes['container'] + ' ' + classes['calendar']}>
    <LeftBar />

    <div className={classes['calendar__body']}>
      
      <CalendarHeader title='Август 2022'/>

      <div className={classes['calendar__block-wrapper']}>
        <CalendarBlock />
      </div>

      <div className={classes['calendar__mob-wrapper']}>
        <CalendarMob />
      </div>

      <CalendarLessons />
    </div>

  </div>
}