import { useState } from 'react';
import classNames from 'classnames/bind';

import { AtIcon, CancelIcon, DownArrowIcon, EmojiIcon, UpArrowIcon } from '../Icons';
import styles from './Comment.module.scss';
import CommentItem from './CommentItem';
import { commentData, repliesData } from '~/data/comments';

const cx = classNames.bind(styles);

function Comment() {
  const [comment, setComment] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleCancel = () => {
    setIsClosing(true);
    // Đợi animation hoàn thành rồi mới đóng
    setTimeout(() => {
      setComment(false);
      setIsClosing(false);
    }, 300); // 300ms = thời gian animation
  };

  return (
    <div>
      {comment && (
        <div className={cx('comment', { closing: isClosing })}>
          <div className={cx('comment-title')}>
            <span className={cx('amount-comment')}>Bình luận (1858)</span>
            <button className={cx('cancel')} onClick={handleCancel}>
              <CancelIcon />
            </button>
          </div>
          <div className={cx('comment-list')}>
            {commentData.map((comments, id) => (
              <CommentItem key={id} data={comments} replies={repliesData} />
            ))}
          </div>
          <div className={cx('comment-bar')}>
            <div className={cx('comment-input-wrapper')}>
              <div className={cx('comment-input')}>
                <input placeholder="Thêm bình luận..." />

                <AtIcon className={cx('icon')} />
                <EmojiIcon className={cx('icon')} />
              </div>
            </div>
            <div>Đăng</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
