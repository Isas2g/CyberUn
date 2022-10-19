import classes from './style.module.scss'

import { Title as H2 } from '../../../../common/components/H2'

interface Props {
  images: Array<string>,
  title: string,
  colorTitle?: string
}

export const AchievmentsCourse = ({ images, title, colorTitle }: Props) => {

  // Как передать colorTitle в H2

  return <div className={classes['achievements__course']}>
    <H2 text={title} color='purple' />
    <ul className={classes['achievements__list']}>
      {
        images.map(image => {
          return (
            <li className={classes['achievements__item']}>
              <img src={image} alt="" />
            </li>
          )
        })
      }
    </ul>
  </div>
}