import { useState } from 'react';
import classNames from 'classnames/bind';

import { CancelIcon } from '../Icons';
import styles from './Comment.module.scss';
import CommentItem from './CommentItem';
import { commentData } from '~/data/comments';
import CommentBar from './CommentBar';

const cx = classNames.bind(styles);

function Comment() {
  // dùng để render ra giao diện comment
  const [comment, setComment] = useState(true);
  // dùng để thực hiện chức năng đóng comment
  const [isClosing, setIsClosing] = useState(false);
  // dùng để quản lý danh sách comments
  const [comments, setComments] = useState(commentData);

  // Tham số newComment là object chứa thông tin comment mới được thêm vào
  const handleAddComment = (newComment) => {
    // Kiểm tra xem comment này có phải là reply không
    // parentId là ID của comment gốc mà người dùng đang reply
    if (newComment.parentId) {
      // Map qua toàn bộ mảng comments để tìm comment gốc
      setComments(
        comments.map((comment) => {
          // Nếu tìm thấy comment có id trùng với parentId
          if (comment.id === newComment.parentId) {
            return {
              ...comment, // Giữ nguyên tất cả thông tin của comment gốc
              replies: [
                ...(comment.replies || []), // Spread tất cả replies cũ, nếu chưa có thì tạo mảng rỗng
                newComment, // Thêm reply mới vào cuối mảng
              ],
            };
          }
          return comment; // Nếu không phải comment cần tìm, giữ nguyên
        }),
      );
    } else {
      // Nếu là comment thường (không phải reply)
      setComments([
        newComment, // Thêm comment mới vào đầu mảng
        ...comments, // Spread tất cả comments cũ vào sau
      ]);
    }
  };

  const handleCancel = () => {
    setIsClosing(true);
    // Đợi animation hoàn thành rồi mới đóng
    setTimeout(() => {
      setComment(false);
      setIsClosing(false);
    }, 300); // 300ms = thời gian animation
  };

  const getTotalComment = (comments) => {
    return comments.reduce((total, comment) => {
      const repliesCount = comment.replies ? comment.replies.length : 0;
      return total + repliesCount + 1; // + 1 là tính comment gốc
    }, 0 /* giá trị ban đầu là 0 */);
  };

  return (
    <div>
      {comment && (
        <div className={cx('comment', { closing: isClosing })}>
          <div className={cx('comment-title')}>
            <span className={cx('amount-comment')}>Bình luận ({getTotalComment(comments)})</span>
            <button className={cx('cancel')} onClick={handleCancel}>
              <CancelIcon />
            </button>
          </div>
          <div className={cx('comment-list')}>
            {comments.map((comment, index) => (
              <CommentItem key={index} data={comment} replies={comment.replies} onAddComment={handleAddComment} />
            ))}
          </div>
          <CommentBar className={'comment-bar'} onAddComment={handleAddComment} />
        </div>
      )}
    </div>
  );
}

export default Comment;
