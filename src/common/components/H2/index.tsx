import classes from './style.module.scss'

// enum Colors {
//   black='black',
//   purple='purple'
// }

type Colors = 'black' | 'yellow' | 'purple'

interface Props {
  text: string,
  styles?: Object
  color?: Colors
}

export const Title = ({text, styles, color}: Props) => {
  if (color === 'yellow') {
    const style = {
      color: '#FFB118',
      ...styles
    }
    return <h2 style={style} className={classes['h2']}>
      {text}
    </h2> 
  } else if (color === 'purple') {
    const style = {
      color: '#6E14AC',
      ...styles
    }
    return <h2 style={style} className={classes['h2']}>
      {text}
    </h2> 
  } else {
    return <h2 style={styles} className={classes['h2']}>
      {text}
    </h2> 
  }
  
}

