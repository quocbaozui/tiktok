import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Comment.module.scss';
import { AtIcon, EmojiIcon } from '../Icons';

const cx = classNames.bind(styles);

function CommentBar({ className, onAddComment }) {
  // dùng để lưu dữ liệu input để đăng comment
  const [post, setPost] = useState('');

  const handlePost = () => {
    if (!post.trim()) return;

    const newComment = {
      id: Date.now(), // cho 1 id duy nhất
      avatar: 'https://example.com/avatar.jpg', // truyền avatar của người dùng vào đây
      nickname: 'User CCC', // truyền nickname của người dùng vào đây
      text: post, // nội dụng đăng
      time: '1 giây trước',
      likes: 0,
    };

    onAddComment(newComment); // Gọi hàm từ component cha
    setPost(''); // Reset input sau khi đăng
  };
  return (
    <div className={cx(className)}>
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
  );
}

export default CommentBar;
