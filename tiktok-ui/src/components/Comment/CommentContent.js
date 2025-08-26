import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FlagIcon, OutlineHeartIcon, SolidHeartIcon } from '../Icons';
import Image from '../Images';
import styles from './Comment.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CommentContent({ data, report, onReport }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className={cx('avatar-wrapper')}>
        <Image src={data.avatar} className={cx('avatar')} />
      </div>
      <div className={cx('content')}>
        <div className={cx('nick-name-wrapper')}>
          <div className={cx('nick-name')}>{data.nickname}</div>
          <div>
            <Tippy
              placement="bottom-end"
              visible={report}
              interactive={true}
              onClickOutside={() => onReport(false)}
              render={(attrs) => (
                <div className={cx('tippy-report')} tabIndex="-1" {...attrs}>
                  <div className={cx('report')}>
                    <FlagIcon />
                    <div className={cx('report-text')}>Báo cáo</div>
                  </div>
                </div>
              )}
            >
              <span onClick={() => onReport((prev) => !prev)}>
                <FontAwesomeIcon icon={faEllipsis} className={cx('more-btn', { active: report })} />
              </span>
            </Tippy>
          </div>
        </div>
        <div className={cx('comment-text')}>{data.text}</div>
        <div className={cx('post')}>
          <div className={cx('comment-meta')}>
            <div>{data.time}</div>
            <div className={cx('comment-reply')}>Trả lời</div>
          </div>
          <div className={cx('comment-action')} onClick={handleLike}>
            {liked ? <OutlineHeartIcon className={cx('heart', { liked: liked })} /> : <SolidHeartIcon />}
            <span>{data.likes + (liked ? 1 : 0)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentContent;
