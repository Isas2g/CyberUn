import classes from './style.module.scss'

import calendarArrow from '../../assets/icons/calendar-arrow.svg'

export const Calendar = () => {

  return <div className={classes['main-content__calendar'] + ' ' + classes['calendar']}>
  <div className={classes['calendar__title']}>
    <p className={classes['calendar__date']}>Август 2022</p>
    <div className={classes['calendar__arrows']}>
      <img src={calendarArrow} alt="" />
      <img src={calendarArrow} alt="" />
    </div>
  </div>
  <hr className={classes['calendar__line']} />
  <div className={classes['calendar__dates']}>
    <span className={classes['calendar__day-week']}>пн</span>
    <span className={classes['calendar__day-week']}>вт</span>
    <span className={classes['calendar__day-week']}>ср</span>
    <span className={classes['calendar__day-week']}>чт</span>
    <span className={classes['calendar__day-week']}>пт</span>
    <span className={classes['calendar__day-week']}>сб</span>
    <span className={classes['calendar__day-week']}>вс</span>
    
    <div className={classes['calendar__day']}>1</div>
    <div className={classes['calendar__day']}>2</div>
    <div className={classes['calendar__day']}>3</div>
    <div className={classes['calendar__day']}>4</div>
    <div className={classes['calendar__day']}>5</div>
    <div className={classes['calendar__day']}>6</div>
    <div className={classes['calendar__day']}>7</div>
    <div className={classes['calendar__day']}>8</div>
    <div className={classes['calendar__day']}>9</div>
    <div className={classes['calendar__day']}>10</div>
    <div className={classes['calendar__day']}>11</div>
    <div className={classes['calendar__day']}>12</div>
    <div className={classes['calendar__day']}>13</div>
    <div className={classes['calendar__day']}>14</div>
    <div className={classes['calendar__day']}>15</div>
    <div className={classes['calendar__day']}>16</div>
    <div className={classes['calendar__day']}>17</div>
    <div className={classes['calendar__day']}>18</div>
    <div className={classes['calendar__day']}>19</div>
    <div className={classes['calendar__day']}>20</div>
    <div className={classes['calendar__day']}>21</div>
    <div className={classes['calendar__day']}>22</div>
    <div className={classes['calendar__day']}>23</div>
    <div className={classes['calendar__day']}>24</div>
    <div className={classes['calendar__day']}>25</div>
    <div className={classes['calendar__day']}>26</div>
    <div className={classes['calendar__day']}>27</div>
    <div className={classes['calendar__day']}>28</div>
    <div className={classes['calendar__day']}>29</div>
    <div className={classes['calendar__day']}>30</div>
    <div className={classes['calendar__day']}>31</div>
  </div>
</div>
}

