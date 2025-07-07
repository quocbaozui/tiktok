import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cv = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cv('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;
