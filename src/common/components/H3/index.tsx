import classes from './style.module.scss'

// enum Colors {
//   black='black',
//   purple='purple'
// }

interface Props {
  text: string,
  // color: Colors
}

export const Title = ({text}: Props) => {

  return <h3 className={classes['h3']}>
    {text}
  </h3> 
}

