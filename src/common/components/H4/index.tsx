import classes from './style.module.scss'

// enum Colors {
//   black='black',
//   purple='purple'
// }

interface Props {
  text: string,
  styles?: Object
  // color: Colors
}

export const Title = ({text, styles}: Props) => {

  return <h4 style={styles} className={classes['h4']}>
    {text}
  </h4> 
}

