import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/86ed746e1e728f509edf45d49e8fa2c2~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=8aab7023&x-expires=1749002400&x-signature=rry93rb5NgC80iGnlZzR%2BwbQcF4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
