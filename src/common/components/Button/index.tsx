import classes from './style.module.scss';

interface Props {
  styles?: any;
  children: JSX.Element
  | JSX.Element[]
  | string
  | string[];
}

export const Button: React.FC<Props> = ({ styles, children }: Props) => {
  return <button
    className={classes['button']}
    style={styles}
  >
    {children}
  </button>
}