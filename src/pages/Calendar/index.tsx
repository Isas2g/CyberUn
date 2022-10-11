import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import {Title as H2} from '../../common/components/H2'

import plus from '../../common/assets/icons/plus-light.svg'

export const Calendar = () => {
  return <div className={classes['container'] + ' ' + classes['calendar']}>
    <LeftBar />

    <div className={classes['calendar__body']}>
      <div className={classes['calendar__head']}>
        <H1 text='Август 2022' />
        <div className={classes['calendar__plus']}>
          <img src={plus} alt="" />
        </div>
      </div>

      <div className={classes['calendar__calendar-block'] + ' ' + classes['calendar-block']}>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

        <div className={classes['calendar-block__day-block'] + ' ' + classes['day-block']}>
          <p className={classes['day-block__day']}>1</p>

          <div className={classes['day-block__schedule']}>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
            <div className={classes['day-block__lesson']}>14:00, Физика</div>
          </div>
        </div>

      </div>

      <div className={classes['calendar__lessons']}>
        <H2 text='Занятия на этой неделе:' />
        <ul className={classes['calendar__lessons-list']}>
          <li className={classes['calendar__lesson']}>
            <p>1 августа, 14:00, Физика</p>
            <p>Необходимо выполнять домашнее задание</p>
            <p>Онлайн /Адерс площадки</p>
          </li>
          <li className={classes['calendar__lesson']}>
            <p>1 августа, 14:00, Физика</p>
            <p>Необходимо выполнять домашнее задание</p>
            <p>Онлайн /Адерс площадки</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
}