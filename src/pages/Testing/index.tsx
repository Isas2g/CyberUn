import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import {Title as H2} from '../../common/components/H2'
import {Title as H3} from '../../common/components/H3'

export const Testing = () => {
  return <div className={classes['container'] + ' ' + classes['testing']}>
    <LeftBar />

    <div className={classes['testing__body']}>
      <a href='/' className={classes['testing__back']}>&#60; назад</a>
      <div className={classes['testing__top']}> </div>
      <div className={classes['testing__question'] + ' ' + classes['question']}>
        <H1 text='Тест по уроку' color='yellow' />

        <H3 text="Вопрос 1 из 10" color='yellow' styles={{ margin: '10px 0 10px 0', fontWeight: 300 }} />
        <H2 text='Как удалить повторяющиеся элементы из заданного массива в Java?' styles={{textAlign: 'center'}} />

        <div className={classes['question__variant']}>
          <span>Ответ 1</span>
        </div>
        <div className={classes['question__variant']}>
          <span>Ответ 2</span>
        </div>
        <div className={classes['question__variant'] + ' ' + classes['question__variant--wrong']}>
          <span>Ответ 3</span>
        </div>
        <div className={classes['question__variant'] + ' ' + classes['question__variant--right']}>
          <span>Ответ 4</span>
        </div>

        <a href='/' className={classes['question__next']}>Следующий вопрос &#62;</a>
      </div>
      <div className={classes['testing__bottom']}> </div>
    </div>
  </div>
}