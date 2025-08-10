import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import Button from '../Button';
import { HeartIcon, CommentIcon, FavoriteIcon, ShareIcon } from '../Icons';
import Image from '../Images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Video({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        <video className={cx('video-content')} src={data.videoUrl} controls />
      </div>
      <div className={cx('action-bar')}>
        <Button className={cx('wrapper-btn')}>
          <div className={cx('avatar-container')}>
            <Image className={cx('avatar')} src={data.avatar} />
            <span className={cx('plus')}>+</span>
          </div>
        </Button>
        <Button className={cx('wrapper-btn')} onClick={handleLike}>
          <span className={cx('icon')}>
            <HeartIcon className={cx('heart-icon', { liked: isLiked })} />
          </span>
          <strong className={cx('count')}>{data.likes}</strong>
        </Button>
        <Button className={cx('wrapper-btn')}>
          <span className={cx('icon')}>
            <CommentIcon />
          </span>
          <strong className={cx('count')}>{data.comments}</strong>
        </Button>
        <Button className={cx('wrapper-btn')}>
          <span className={cx('icon')}>
            <FavoriteIcon />
          </span>
          <strong className={cx('count')}>{data.shares}</strong>
        </Button>
        <Button className={cx('wrapper-btn')}>
          <span className={cx('icon')}>
            <ShareIcon />
          </span>
          <strong className={cx('count')}>{data.shares}</strong>
        </Button>
        <Button className={cx('wrapper-btn')}>
          <div className={cx('avatar-container')}>
            <Image
              className={cx('avatar')}
              src={
                'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c69c89ed798908c544401c5fb159ca6e~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=68a87b61&x-expires=1754744400&x-signature=W%2FJXrxCKhjt76b9mEw94f1D2XxY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1'
              }
            />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Video;
