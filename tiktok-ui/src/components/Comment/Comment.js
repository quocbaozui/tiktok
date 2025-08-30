import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { AtIcon, CancelIcon, EmojiIcon } from '../Icons';
import styles from './Comment.module.scss';
import CommentItem from './CommentItem';
import { commentData } from '~/data/comments';

const cx = classNames.bind(styles);

function Comment() {
  // dùng để render ra giao diện comment
  const [comment, setComment] = useState(true);
  // dùng để thực hiện chức năng đóng comment
  const [isClosing, setIsClosing] = useState(false);
  // dùng để lưu dữ liệu input để đăng comment
  const [post, setPost] = useState('');
  // dùng để quản lý danh sách comments
  const [comments, setComments] = useState(commentData);

  const handleCancel = () => {
    setIsClosing(true);
    // Đợi animation hoàn thành rồi mới đóng
    setTimeout(() => {
      setComment(false);
      setIsClosing(false);
    }, 300); // 300ms = thời gian animation
  };

  const handlePost = () => {
    if (!post.trim()) return;

    const newComment = {
      id: comments.length + 1,
      avatar: 'https://example.com/avatar.jpg',
      nickname: 'User C',
      text: post,
      time: '1 giây trước',
      likes: 0,
    };
    setPost('');
    return setComments([...comments, newComment]);
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
            {comments.map((comment, index) => (
              <CommentItem key={index} data={comment} replies={comment.replies} />
            ))}
          </div>
          <div className={cx('comment-bar')}>
            <div className={cx('comment-input-wrapper')}>
              <div className={cx('comment-input')}>
                <input value={post} placeholder="Thêm bình luận..." onChange={(e) => setPost(e.target.value)} />

                <div>
                  <Tippy
                    delay={[0, 100]}
                    interactive
                    render={(attrs) => (
                      <div className={cx('icon-tippy')} tabIndex="-1" {...attrs}>
                        Dùng ký hiệu "@" để gắn thẻ một người dùng trong bình luận của bạn
                      </div>
                    )}
                  >
                    <div className={cx('icon-wrapper')}>
                      <AtIcon className={cx('icon')} />
                    </div>
                  </Tippy>
                </div>

                <div>
                  <Tippy
                    delay={[0, 100]}
                    interactive
                    render={(attrs) => (
                      <div className={cx('icon-tippy1')} tabIndex="-1" {...attrs}>
                        Nhấp để thêm emoji
                      </div>
                    )}
                  >
                    <button className={cx('icon-wrapper')}>
                      <EmojiIcon className={cx('icon')} />
                    </button>
                  </Tippy>
                </div>
              </div>
            </div>
            <div className={cx('post-comment', { active: post.length > 0 })} onClick={handlePost}>
              Đăng
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
