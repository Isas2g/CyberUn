import classes from './style.module.scss'

import {LeftBar} from '../../common/components/LeftBar'
import {Title as H1} from '../../common/components/H1'
import { CourseBlock } from '../../common/components/CourseBlock'

export const Modules = () => {
  return <div className={classes['container'] + ' ' + classes['modules']}>
    <LeftBar />

    <div className={classes['modules__body']}>
    </div>
  </div>
}