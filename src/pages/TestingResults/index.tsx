import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
// import {Title as H2} from '../../common/components/H2'
// import {Title as H3} from '../../common/components/H3'

export const TestingResults = () => {
  return <div className={classes['container'] + ' ' + classes['results']}>
    <LeftBar />

    <div className={classes['results__body']}>
      <div></div>
      <div className={classes['results__info']}>
        <div className={classes['results__right-number']}>
          10
        </div>
        {/* Поменять на компонент H3 */}
        <h3>10 правильных ответов из 10</h3>
        <H1 text='Ты молодец!' />
        <a href='/' className={classes['results__ending-button']}>Завершить тест</a>
      </div>
      <div></div>
    </div>
  </div>
}