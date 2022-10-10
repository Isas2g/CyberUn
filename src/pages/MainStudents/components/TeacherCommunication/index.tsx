import classes from './style.module.scss';

import teacherChatIcon from '../../../../common/assets/icons/teacher-icon-chat.svg'

export const TeacherCommunication = ({image, name, direction}: Props) => {
  return <div className={classes['communication__teacher']}>
    <img className={classes['communication__teacher-image']} src={image} alt=""/>
    <div className={classes['communication__teacher-text']}>
      <p className={classes['communication__teacher-name']}>
        {name}
      </p>
      <p className={classes['communication__teacher-direction']}>{direction}</p>
    </div>
    <img className={classes['communication__teacher-chat']} src={teacherChatIcon} alt="" />
  </div>
}

interface Props {
  image: string,
  name: string,
  direction: string
}