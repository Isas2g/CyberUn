import classes from './style.module.scss'

// enum Colors {
//   black='black',
//   purple='purple'
// }

type Colors = 'black' | 'white'

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
  } else {
    return <h4 style={styles} className={classes['h4']}>
      {text}
    </h4> 
  }
  
}

