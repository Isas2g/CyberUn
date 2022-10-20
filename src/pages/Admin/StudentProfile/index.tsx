import { LeftBar } from '../../../common/components/LeftBar';
import classes from './style.module.scss';
import { Title } from '../../../common/components/H1';
import { Title as H3 } from '../../../common/components/H3';
import { Button } from '../../../common/components/Button';
import { Link } from 'react-router-dom';
import yellowStar from '../../../common/assets/icons/yellow-star.svg'
import redStar from '../../../common/assets/icons/red-star.svg'
import star from '../../../common/assets/icons/star.svg'

export const AdminStudentProfile = () => {
  return <div className={classes['container']}>
    <LeftBar />

    <div className={classes['content']}> 
      <Title text={'Профиль ученика:'} styles={{marginBottom: 9}} />

      <div className={classes['image-info']}>
        <div className={classes['image']}></div>
        <div className={classes['info']}>
          <Title text={'Фамилия имя отчество'} styles={{marginBottom: 10}} />
          <div className={classes['contacts']}>
            <div>
              <H3 text={'Какой-то курс по физике'} color='purple' />
              <H3 text={'Какой-то курс по проге'} color='yellow' styles={{marginBottom: 10}} />

              <H3 text={'Телефон:'} color='black' />
              <H3 text={'+7 (987) 654-32-10'} color='black' />
              <H3 text={'Email:'} color='black' />
              <H3 text={'name@surnme@mail.com'} color='black' styles={{marginBottom: 15}} />

              <H3 text={'Телефон родителя:'} color='black' />
              <H3 text={'+7 (987) 654-32-10'} color='black' />
              <H3 text={'Email родителя:'} color='black' />
              <H3 text={'name@surnme@mail.com'} color='black' />
            </div>
            <div>
              <Title text={'Баланс:'} color='black' />
              <H3 text={'1024 руб.'} color='black' />
              <Link className={classes['payment-history-link']} to='#'>История оплат</Link>

              <Title text={'Система жизней'} color='black' styles={{marginBottom: 10}} />
              <div className={classes['stars-lives']}>
                <img src={redStar} alt="" />
                <img src={redStar} alt="" />
                <img src={redStar} alt="" />
                <img src={redStar} alt="" />
                <img src={redStar} alt="" />
              </div>
              <div className={classes['stars-lives']}>
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes['active-courses']}>
        <Title text={'Посещаемость:'} />

        <div className={classes['attend-block']}>
          <H3 styles={{marginBottom: 10}} color='purple'><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1, ФИО препода</Link></H3>

          <div className={classes['attends']}>
            {
              new Array(37).fill(5).map((item, index) => 
                <div key={index}
                  className={
                    (index === 3 
                    ? classes['red'] 
                    : index === 9 
                    ? classes['yellow']
                    : index <= 12 
                    ? classes['green']
                    : '')
                    + ' ' + classes['attend-circle']
                  }
                >
                  {index === 3 
                    ? '' 
                    : index === 9 
                    ? ''
                    : index <= 12 
                    ? item
                    : ''}
                </div>
              )
            }
          </div>
          <H3 styles={{marginBottom: 15}} color='purple'><Link className={classes['course-link']} to="/course">Следующий урок: модуль 2, название урока</Link></H3>

          <H3 color='black'>Оплчено до 1.09.2022</H3>
        </div>

        <div className={classes['attend-block']}>
          <H3 styles={{marginBottom: 10}} color='yellow'><Link className={classes['course-link']} to="/course">Какой-то курс по физике, группа №1, ФИО препода</Link></H3>

          <div className={classes['attends']}>
            {
              new Array(37).fill(5).map((item, index) => 
                <div key={index}
                  className={
                    (index === 3 
                    ? classes['red'] 
                    : index === 9 
                    ? classes['yellow']
                    : index <= 12 
                    ? classes['green']
                    : '')
                    + ' ' + classes['attend-circle']
                  }
                >
                  {index === 3 
                    ? '' 
                    : index === 9 
                    ? ''
                    : index <= 12 
                    ? item
                    : ''}
                </div>
              )
            }
          </div>
          <H3 styles={{marginBottom: 15}} color='yellow'><Link className={classes['course-link']} to="/course">Следующий урок: модуль 2, название урока</Link></H3>

          <H3 color='black'>Оплчено до 14.10.2022</H3>
        </div>
      </div>
      
      <div className={classes['buttons']}>
        <div className={classes['buttons-column']}>
          <Button>Связаться с преподавателем</Button>
          <Button>Редактировать профиль</Button>
        </div>
        <div className={classes['buttons-column']}>
          <Button>Связаться с родителем</Button>
          <Button>Удалить профиль</Button>
        </div>
        <div className={classes['buttons-column']}>
          <Button>Убрать одну “жизнь”</Button>
          <Button>Восстановить жизни</Button>
        </div>

      </div>
    </div>
  </div>
}