import classes from './style.module.scss'

type Colors = 'black' | 'yellow' | 'black'

interface Props {
  text: string,
  styles?: object,
  color?: Colors
}

export const Title = ({text, styles, color}: Props) => {
  if (color === 'yellow') {
    const style = {
      color: '#FFB118',
      ...styles
    }
    return <h3 style={style} className={classes['h3']}>
      {text}
    </h3> 
  } else if (color === 'black') {
    const style = {
      color: '#302E2E',
      ...styles
    }
    return <h3 style={style} className={classes['h3']}>
      {text}
    </h3> 
  } else {
    return <h3 style={styles} className={classes['h3']}>
      {text}
    </h3> 
  }
  
}

