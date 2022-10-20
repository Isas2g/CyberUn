import { LeftBar } from '../../../common/components/LeftBar';
import classes from './style.module.scss';
import { Title } from '../../../common/components/H1';
import { Title as H3 } from '../../../common/components/H3';
import { Button } from '../../../common/components/Button';
import { Link } from 'react-router-dom';

export const AdminTeacherProfile = () => {
  return <div className={classes['container']}>
    <LeftBar />

    <div className={classes['content']}> 
      <Title text={'Профиль преподавателя'} styles={{marginBottom: 9}} />

      <div className={classes['image-info']}>
        <div className={classes['image']}></div>
        <div className={classes['info']}>
          <Title text={'Фамилия имя отчетсво'} styles={{marginBottom: 20}} />
          <div className={classes['contacts']}>
            <div>
              <H3 text={'Телефон:'} color='black' />
              <H3 text={'+7 (987) 654-32-10'} color='black' styles={{marginBottom: 20}} />

              <H3 text={'Email:'} color='black' />
              <H3 text={'name@surnme@mail.com'} color='black' />
            </div>
            <div>
              <Title text={'Площадка:'} color='black' />
              <H3 text={'адрес / онлайн'} color='black' styles={{marginBottom: 20}} />

              <Title text={'Площадка:'} color='black' />
              <H3 text={'Парнер'} color='black' />
            </div>
          </div>
        </div>
      </div>

      <div className={classes['active-courses']}>
        <Title text={'Активные курсы:'} />

        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
        <H3 styles={{marginBottom: 10}}><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1</Link></H3>
      </div>

      <div className={classes['buttons']}>
        <Button>Связаться с преподавателем</Button>
        <Button>Редактировать профиль</Button>
        <Button>Удалить  профиль</Button>
      </div>
    </div>
  </div>
}