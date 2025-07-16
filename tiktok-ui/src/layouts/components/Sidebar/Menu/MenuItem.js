import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    // NavLink nó sẽ tự động sinh ra object và sẽ nhận object thông qua nav
    // nav.isActive sẽ trả về true || false
    // cx sẽ hiểu  active: true thì sẽ thêm class active vào
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
export default MenuItem;
