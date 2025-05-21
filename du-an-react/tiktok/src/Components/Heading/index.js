import clsx from 'clsx'
import styles from './Heading.module.css'

function Heading() {
  return ( 
    <div>
      <button className={clsx(styles.btn, {
        [styles.haha]: false
      })}>Click me!</button>
      <button className={styles.btn}>Click me!</button>
    </div>
  );
}

export default Heading;