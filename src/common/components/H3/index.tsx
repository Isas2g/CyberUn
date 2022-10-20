import classes from './style.module.scss'

// enum Colors {
//   black='black',
//   purple='purple'
// }

type Colors = 'black' | 'yellow' | 'black' | 'purple'

interface Props {
  text?: string,
  styles?: Object
  color?: Colors
  children?: JSX.Element
  | JSX.Element[]
  | string
  | string[];
}

export const Title = ({text, styles, color, children}: Props) => {
  if (color === 'yellow') {
    const style = {
      color: '#FFB118',
      ...styles
    }
    return <h3 style={style} className={classes['h3']}>
      {children || text}
    </h3> 
  } else if (color === 'black') {
    const style = {
      color: '#302E2E',
      ...styles
    }
    return <h3 style={style} className={classes['h3']}>
      {children || text}
    </h3> 
  } else if (color === 'purple') {
    const style = {
      color: '#A68DCC',
      ...styles
    }
    return <h3 style={style} className={classes['h3']}>
      {children || text}
    </h3> 
  }  
  else {
    return <h3 style={styles} className={classes['h3']}>
      {children || text}
    </h3> 
  }
  
}

