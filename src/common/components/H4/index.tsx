import classes from './style.module.scss'

// enum Colors {
//   black='black',
//   purple='purple'
// }

type Colors = 'black' | 'white' | 'yellow' | 'purple'

interface Props {
  text: string,
  styles?: Object
  color?: Colors
}

export const Title = ({text, styles, color}: Props) => {
  if (color === 'black') {
    const style = {
      color: '#302E2E',
      ...styles
    }
    return <h4 style={style} className={classes['h4']}>
      {text}
    </h4> 
  } else if (color === 'yellow') {
    const style = {
      color: '#FFB118',
      ...styles
    }
    return <h4 style={style} className={classes['h4']}>
      {text}
    </h4>
  } else if (color === 'purple') {
    const style = {
      color: '#D5B8DA',
      ...styles
    }
    return <h4 style={style} className={classes['h4']}>
      {text}
    </h4>
  } else {
    return <h4 style={styles} className={classes['h4']}>
      {text}
    </h4> 
  }
  
}

