import { useState } from 'react';
import logo from '../../common/assets/icons/logo.svg';
import classes from './style.module.scss';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export const Authentication = () => {

  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isPasswordSent, setIsPasswordSent] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const [isRegistrationSent, setisRegistrationSent] = useState(false);
  
  const isEmailFilled = (email !== '' && email.includes('@') && email.includes('.'));
  const isFieldsFilled = isEmailFilled && (password !== '');
  // let isPasswordsMatch = password === confirmPassword;
  let isPasswordsMatch = true;
  let isEmailExist = false;

  return <div className={classes['container']}>
    <img src={logo} alt="" className={classes["logo"]} />
    
    <div className={classes['animation']}>
      <p>Тут анимация</p>
    </div>

    <div className={classes['inner']}>
      <div className={classes['form']}>
        {(!isForgotPassword && !isPasswordSent && !isRegistration && !isRegistrationSent) && <>
          <h2 className={classes['form-title']}>Войдите, пожалуйста, в свой профиль</h2>

          <form>
            <label className={classes['input-label']} htmlFor="email">E-mail</label>
            <input 
              value={email}
              onChange={el => setEmail(el.target.value)}
              className={classes['input']}
              id="email"
              type="email"
              placeholder='Введите ваш E-mail'
            />
            <label className={classes['input-label']} htmlFor="password">Пароль</label>
            <input 
              onChange={el => setPassword(el.target.value)}
              value={password}
              className={`${classes['input']} ${classes['input-last']}`}
              id="password" 
              type="password" 
              placeholder='Введите ваш пароль' 
            />

            <a href="#" className={classes['forgot-password']} onClick={(e) => {e.preventDefault();setIsForgotPassword(true)}}>Забыли пароль?</a>

            <button className={classes['submit-button'] + (isFieldsFilled ? '' : (' ' + classes['disabled']))}>Войти</button>
            <p className={classes['no-account']}>Нет аккаунта? <a href="#" 
              onClick={(e) => {e.preventDefault();setIsRegistration(true)}}
            >Зарегистрируйтесь</a></p>
          </form>
        </>}


        {isForgotPassword && <>
          <h2 className={classes['form-title']}>Введите ваш E-mail для восстановления пароля</h2>

          <form>
            <label className={classes['input-label']} htmlFor="email">E-mail</label>
            <input 
              value={email}
              onChange={el => setEmail(el.target.value)}
              className={classes['input']}
              id="email"
              type="email"
              placeholder='Введите ваш E-mail'
            />

            <button onClick={(e) => {e.preventDefault(); setIsForgotPassword(false)}} className={classes['submit-button']}>Назад</button>
            <button 
              onClick={(e) => {e.preventDefault(); setIsForgotPassword(false); setIsPasswordSent(true);}}
              className={classes['submit-button'] + (isEmailFilled ? '' : (' ' + classes['disabled']))}
            >Восстановить пароль</button>
          </form>
        </>}

        {isPasswordSent && <> 
          <h2 className={classes['form-title']}>Письмо для восставноления пароля было отправлено вам на почту.</h2>
          <form>
            <button onClick={(e) => {e.preventDefault(); setIsPasswordSent(false)}} className={classes['submit-button']}>Назад</button>
          </form>
        </>}

        {isRegistration && <>
          <h2 className={classes['form-title']}>Регистрация аккаунта</h2>

          <form>
            <label className={classes['input-label']} htmlFor="role">Ваша роль?</label>
            <select 
              className={classes['input']}
              id="role"
              value={role}
              onChange={el => setRole(el.target.value)}
            >
              <option value='pupil'>Ученик</option>
              <option value='teacher'>Учитель</option>
              <option value='parent'>Родитель</option>
            </select>
            <label className={classes['input-label']} htmlFor="name">Как вас зовут?</label>
            <input 
              value={username}
              onChange={el => setUsername(el.target.value)}
              className={classes['input']}
              id="name"
              type="text"
              placeholder='Введите ваше имя'
            />
            <label className={classes['input-label']} htmlFor="email">E-mail</label>
            <input 
              value={email}
              onChange={el => setEmail(el.target.value)}
              className={classes['input']}
              style={isEmailExist ? {color: '#F76159'} : {}}
              id="email"
              type="email"
              placeholder='Введите ваш E-mail'
            />
            <label className={classes['input-label']} htmlFor="phone">Номер телефона</label>
            <input 
              value={phone}
              onChange={el => setPhone(el.target.value)}
              className={classes['input']}
              id="phone"
              type="tel"
              placeholder='+7...'
            />
            <label className={classes['input-label']} htmlFor="password">Пароль</label>
            <input 
              onChange={el => setPassword(el.target.value)}
              value={password}
              className={`${classes['input']} ${classes['input-last']}`}
              style={!isPasswordsMatch ? {color: '#F76159'} : {}}
              id="password" 
              type="password" 
              placeholder='Введите ваш пароль' 
            />
            <label className={classes['input-label']} htmlFor="confirmPassword">Подтвердите пароль</label>
            <input 
              onChange={el => setConfirmPassword(el.target.value)}
              value={confirmPassword}
              className={`${classes['input']} ${classes['input-last']}`}
              style={!isPasswordsMatch ? {color: '#F76159'} : {}}
              id="confirmPassword" 
              type="password" 
              placeholder='Введите ваш пароль' 
            />

            <button onClick={(e) => {e.preventDefault(); setIsRegistration(false)}} className={classes['submit-button']}>Назад</button>
            <button 
              onClick={(e) => {e.preventDefault();setisRegistrationSent(true);setIsRegistration(false);}}
              className={classes['submit-button'] + (isFieldsFilled ? '' : (' ' + classes['disabled']))}
            >Зарегистрироваться</button>
          </form>
          {!isPasswordsMatch && <p className={classes['warning-text']}>Пароли не совпадают. Повторите попытку.</p>}
          {isEmailExist && <p className={classes['warning-text']}>E-mail уже зарегистрован. Восстановите пароль.</p>}
        </>}

        {isRegistrationSent && <>
          <h2 className={classes['form-title']}>Ожидайте письмо с подтверждением после одобрения менеджера действительности информации</h2>
          <form>
            <button onClick={(e) => {e.preventDefault(); setisRegistrationSent(false)}} className={classes['submit-button']}>Супер!</button>
          </form>
        </>}
      </div>
    </div>
  </div>
}