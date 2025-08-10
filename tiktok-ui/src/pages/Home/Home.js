import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoList from '~/components/VideoList';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <VideoList />
    </div>
  );
}

export default Home;
