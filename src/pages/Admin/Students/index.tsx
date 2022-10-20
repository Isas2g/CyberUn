import { LeftBar } from '../../../common/components/LeftBar';
import classes from './style.module.scss';
import { Title } from '../../../common/components/H1';
import { Title as H3 } from '../../../common/components/H3';
import { Button } from '../../../common/components/Button';

export const AdminStudents = () => {
  return <div className={classes['container']}>
    <LeftBar />

    <div className={classes['content']}> 
      <div className={classes['title-button']}>
        <Title text={'Ученики'} />
        <Button>Удалить группу</Button>
      </div>

      <input type='text' placeholder='Поиск' className={classes['search-input']} />

      <div className={classes['table']}>
        <div className={classes['row']}>
          <H3 text={'ФИО ученика'} color='purple' />
          <H3 text={'Телефон'} color='purple' />
          <H3 text={'Почта'} color='purple' />
          <H3 text={'Статус оплаты'} color='purple' />
        </div>
        {
          new Array(20).fill('text').map(item =>
          <div className={classes['row']}>
            <p>Иванова Иван Иванович</p>
            <p>+7 (987) 654-32-01</p>
            <p>namename@gmail.com</p>
            <p className={classes['active']}>Оплачено</p>
          </div>
          )
        }
      </div>
    </div>
  </div>
}