import classNames from 'classnames/bind';

import style from './VideoList.module.scss';
import Video from '~/components/Video';
import { videosData } from '~/data/videos';

const cx = classNames.bind(style);
function VideoList() {
  return (
    <div className={cx('video-list')}>
      {videosData.map((data, id) => (
        <div className={cx('video-item')} key={data.id}>
          <Video data={data} />
        </div>
      ))}
    </div>
  );
}

export default VideoList;
