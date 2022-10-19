import classes from './style.module.scss'

import { CalendarDayBlock } from './components/CalendarDayBlock'

export const CalendarBlock = () => {
  return <div className={classes['calendar__calendar-block'] + ' ' + classes['calendar-block']}>

    <CalendarDayBlock 
      day={1} 
      lessons={[
        {
          date: '14:00',
          subject: 'Физика'
        }
      ]} 
    />
    <CalendarDayBlock 
      day={2} 
    />
    <CalendarDayBlock 
      day={3} 
    />
    <CalendarDayBlock 
      day={4} 
    />
    <CalendarDayBlock 
      day={5} 
    />
    <CalendarDayBlock 
      day={6} 
    />
    <CalendarDayBlock 
      day={7} 
    />
    <CalendarDayBlock 
      day={8} 
    />
    <CalendarDayBlock 
      day={9} 
    />
    <CalendarDayBlock 
      day={10} 
    />
    <CalendarDayBlock 
      day={11} 
    />
    <CalendarDayBlock 
      day={12} 
    />
    <CalendarDayBlock 
      day={13} 
    />
    <CalendarDayBlock 
      day={14} 
      lessons={[
        {
          date: '14:00',
          subject: 'Физика'
        }
      ]} 
    />
    <CalendarDayBlock 
      day={15} 
    />
    <CalendarDayBlock 
      day={16} 
    />
    <CalendarDayBlock 
      day={17} 
    />
    <CalendarDayBlock 
      day={18} 
    />
    <CalendarDayBlock 
      day={19} 
    />
    <CalendarDayBlock 
      day={20} 
    />
    <CalendarDayBlock 
      day={21} 
    />
    <CalendarDayBlock 
      day={22} 
    />
    <CalendarDayBlock 
      day={23} 
    />
    <CalendarDayBlock 
      day={24} 
    />
    <CalendarDayBlock 
      day={25} 
    />
    <CalendarDayBlock 
      day={26} 
    />
    <CalendarDayBlock 
      day={27} 
    />
    <CalendarDayBlock 
      day={28} 
    />
    <CalendarDayBlock 
      day={29} 
    />
    <CalendarDayBlock 
      day={30} 
    />
    <CalendarDayBlock 
      day={31} 
    />
    <CalendarDayBlock 
      day={1} 
    />
    <CalendarDayBlock 
      day={2} 
    />
    <CalendarDayBlock 
      day={3} 
    />
    <CalendarDayBlock 
      day={4} 
    />

  </div>
} 