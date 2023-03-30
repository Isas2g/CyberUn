import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import {Title as H2} from '../../common/components/H2'
import {Title as H3} from '../../common/components/H3'
import {Title as H4} from '../../common/components/H4'
import { AdditionalMaterials } from './components/AdditionalMaterials'
import { AdditionalMaterialsVideo } from './components/AdditionalMaterialsVideo'

import icon from '../../common/assets/icons/additional-icon.svg'
import attachFile from '../../common/assets/icons/attach-file.svg'
import sendFile from '../../common/assets/icons/send-file.svg'
import chatPerson from '../../common/assets/img/chat-person.png'

export const Course = () => {

  const type = 'video'

  return <div className={classes['container'] + ' ' + classes['course']}>
    <LeftBar />

    <div className={classes['course__body']}>
      <a href="/" className={classes['course__back']}>&#60; Назад</a>
      <H1 text='Курс: '/>
      <div className="course__title-adapt">
        <H1 text='Программирование на Python, создание игр и простых приложений' color='yellow' styles={{margin: '20px 0 0 0'}} />
      </div>

      <div className={classes['course__module']}>
        <H2 text="Модуль 5, урок 2: название урока" />
        <H4 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla orci vel mauris laoreet pharetra. 
            Sed placerat dignissim tellus, sed commodo metus aliquet quis. Curabitur et laoreet lacus. In feugiat lacus sapien, 
            in tempus tortor laoreet id. Donec ultrices tempor massa, non rhoncus velit. Maecenas et neque eu nisl lacinia aliquet. 
            Phasellus luctus arcu magna, quis bibendum elit mattis sit amet. Maecenas laoreet tellus ante, sit amet ultrices nunc 
            commodo nec. Cras enim orci, suscipit eget lorem nec, commodo consequat purus. Sed quis mauris ac mauris 
            tincidunt porttitor. Aliquam quam risus, auctor eleifend dui sollicitudin, tempor consequat tellus. 
            Quisque blandit ligula eu neque accumsan, pharetra sagittis nisl finibus.' 
          color='black'
          styles={{ fontSize: '10', fontWeight: '600', margin: '5px 0 0 0' }}
        />
      </div>

      {type === 'video' ? <AdditionalMaterialsVideo /> : <AdditionalMaterials />}
      
      <div className={classes['course__homework'] + ' ' + classes['homework']}>
        <H1 text='Домашее задание:' styles={{ margin: '20px 0 0 0' }} />

        <H4 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla orci vel mauris laoreet pharetra. 
          Sed placerat dignissim tellus, sed commodo metus aliquet quis. Curabitur et laoreet lacus. 
          In feugiat lacus sapien, in tempus tortor laoreet id. Donec ultrices tempor massa, non rhoncus velit. 
          Maecenas et neque eu nisl lacinia aliquet. Phasellus luctus arcu magna, quis bibendum elit mattis sit amet. 
          Maecenas laoreet tellus ante, sit amet ultrices nunc commodo nec. Cras enim orci, suscipit eget lorem nec, commodo 
          consequat purus. Sed quis mauris ac mauris tincidunt porttitor. Aliquam quam risus, auctor eleifend dui sollicitudin, 
          tempor consequat tellus. Quisque blandit ligula eu neque accumsan, pharetra sagittis nisl finibus.' 
          color='black'
          styles={{ fontSize: '10', fontWeight: '600', margin: '5px 0 0 0' }}
        />

        <H3 text='Выполнить до 31.08.2022, 12:00' color='yellow' styles={{ margin: '10px 0 0 0' }} />

        <div className={classes['homework__input-block']}>
          <input className={classes['homework__input']} type="text" placeholder='Введите сообщение или ответ на задание' />
          <div className={classes['homework__input-functions']}>
            <img className={classes['homework__attach-file']} src={attachFile} alt="" />
            <img className={classes['homework__send-file']} src={sendFile} alt="" />
          </div>
        </div>

        <div className={classes['homework__history'] + ' ' + classes['history']}>
          <H3 text='История сообщений' color='black' />
          <div className={classes['history__messages'] + ' ' + classes['messages']}>

            <div className={classes['messages__message'] + ' ' + classes['message']}>
              <img className={classes['message__icon']} src={chatPerson} alt="" />

              <div className={classes['message__person-info']}>
                <H4 text='Владимир' color='yellow' />
                <div className={classes['message__person-text']}>
                  <H4 text=' Sed quis mauris ac mauris tincidunt porttitor. Aliquam quam risus, auctor eleifend dui sollicitudin, tempor consequat.' color='black' />
                  <a href="/" className={classes['message__person-file']}>Вложен файл.</a>
                </div>
              </div>

            </div>

            <div className={classes['messages__message'] + ' ' + classes['message'] + ' ' + classes['message--answer']}>
              <img className={classes['message__icon']} src={chatPerson} alt="" />

              <div className={classes['message__person-info']}>
                <H4 text='Владимир' color='purple' styles={{ textAlign: 'end' }} />
                <div className={classes['message__person-text']}>
                  <H4 styles={{ textAlign: 'end' }} text=' Sed quis mauris ac mauris tincidunt porttitor. Aliquam quam risus, auctor eleifend dui sollicitudin, tempor consequat.' color='black' />
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
}