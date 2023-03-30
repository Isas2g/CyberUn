import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import {Title as H2} from '../../common/components/H2'

import diploma from '../../common/assets/img/diploma.png'

import { AchievmentsCourse } from './components/AchievmentsCourse'

export const Achievements = () => {
  return <div className={classes['container'] + ' ' + classes['achievements']}>
    <LeftBar />

    <div className={classes['achievements__body']}>
      <H1 text='Мои успехи:' />

      <AchievmentsCourse 
        images={[
          diploma,
          diploma,
        ]}
        title='Название курса'
        colorTitle='black'
      />
      <AchievmentsCourse 
        images={[
          diploma,
          diploma,
        ]}
        title='Название курса'
        colorTitle='black'
      />
    </div>
  </div>
}