import { createTextChangeRange } from 'typescript'
import classes from './style.module.scss'

type Colors = 'black' | 'red' | 'yellow' | 'purple'

interface Props {
  text: string,
  color?: Colors,
  styles?: Object
}

export const Title = ({text, color, styles}: Props) => {

  if (color === 'red') {
    const style = {
      color: '#FE6356',
      ...styles
    }
    return <h1 style={style} className={classes['h1']}>
    {text}
  </h1> 
  } else if (color === 'yellow') {
    const style = {
      color: '#FFB118',
      ...styles
    }
    return <h1 style={style} className={classes['h1']}>
    {text}
  </h1> 
  } else if (color === 'purple') {
    const style = {
      color: '#D5B8DA',
      ...styles
    }
    return <h1 style={style} className={classes['h1']}>
    {text}
  </h1> 
  } else {
    return <h1 style={styles} className={classes['h1']}>
      {text}
    </h1> 
  }
  
  
}

