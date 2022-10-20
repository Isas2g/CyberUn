import { LeftBar } from '../../../common/components/LeftBar';
import classes from './style.module.scss';
import { Title } from '../../../common/components/H1';
import { Title as H3 } from '../../../common/components/H3';
import { Button } from '../../../common/components/Button';

export const AdminGroups = () => {
  return <div className={classes['container']}>
    <LeftBar />

    <div className={classes['content']}> 
    <div className={classes['title-button']}>
      <Title text={'Ученики и группы'} />
      <Button>Добавить группу</Button>
    </div>

      <input type='text' placeholder='Поиск' className={classes['search-input']} />

      <div className={classes['table']}>
        <div className={classes['row']}>
          <H3 text={'Курс'} color='purple' />
          <H3 text={'Группа'} color='purple' />
          <H3 text={'ФИО преподавателя'} color='purple' />
          <H3 text={'Активность'} color='purple' />
        </div>
        {
          new Array(20).fill('text').map(item =>
          <div className={classes['row']}>
            <p>Финансовая математика</p>
            <p>группа №3</p>
            <p>Иванов Иван Иванович</p>
            <p className={classes['active']}>Активен</p>
          </div>
          )
        }
      </div>
    </div>
  </div>
}