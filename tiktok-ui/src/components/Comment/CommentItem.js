import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Comment.module.scss';
import { DownArrowIcon, UpArrowIcon } from '../Icons';
import CommentContent from './CommentContent';
import ReplyItem from './ReplyItem';

const cx = classNames.bind(styles);

function CommentItem({ className, data, replies = [] }) {
  const [report, setReport] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const handleToggleReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <div className={cx('comment-detail', className)}>
      <div className={cx('comment-header')}>
        <CommentContent data={data} report={report} onReport={setReport} />
      </div>

      {/* replies */}
      {replies.length > 0 && (
        <div className={cx('comment-main')}>
          <div className={cx('comment-reply-container')}>
            {showReplies ? (
              <div className={cx('view-more-replies-unhide')}>
                {replies.map((reply, id) => (
                  <ReplyItem key={id} data={reply} />
                ))}
                <div className={cx('view-more-replies')}>
                  <div className={cx('more-replies-avatar-space')}></div>
                  <div className={cx('more-replies-options')} onClick={handleToggleReplies}>
                    <span className={cx('text')}>Ẩn</span>
                    <UpArrowIcon className={cx('arrow')} />
                  </div>
                </div>
              </div>
            ) : (
              <div className={cx('view-more-replies')}>
                <div className={cx('more-replies-avatar-space')}></div>
                <div className={cx('more-replies-options')} onClick={handleToggleReplies}>
                  <span className={cx('text')}>Xem {replies.length} câu trả lời</span>
                  <DownArrowIcon className={cx('arrow')} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentItem;
