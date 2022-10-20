import { LeftBar } from '../../../common/components/LeftBar';
import classes from './style.module.scss';
import { Title } from '../../../common/components/H1';
import { Title as H3 } from '../../../common/components/H3';

export const AdminTeachers = () => {
  return <div className={classes['container']}>
    <LeftBar />

    <div className={classes['content']}> 
      <Title text={'Преподаватели'} styles={{marginBottom: 27}} />

      <input type='text' placeholder='Поиск' className={classes['search-input']} />

      <div className={classes['table']}>
        <div className={classes['row']}>
          <H3 text={'ФИО'} color='purple' />
          <H3 text={'Площадка'} color='purple' />
          <H3 text={'Партнер'} color='purple' />
        </div>
        {
          new Array(20).fill('text').map(item =>
          <div className={classes['row']}>
            <p>{item}</p>
            <p>{item}</p>
            <p>{item}</p>
          </div>
          )
        }
      </div>
    </div>
  </div>
}