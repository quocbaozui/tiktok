import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Comment.module.scss';
import CommentContent from './CommentContent';

const cx = classNames.bind(styles);

function ReplyItem({ data, parentId, onAddComment }) {
  const [replyReport, setReplyReport] = useState(false);

  return (
    <div className={cx('reply-item')}>
      <CommentContent
        data={data}
        report={replyReport}
        onReport={setReplyReport}
        onAddComment={(newComment) => {
          const replyComment = {
            ...newComment,
            parentId: parentId, // Comment gốc
            avatar: 'https://example.com/avatar.jpg',
            nickname: 'User AAA',
          };
          onAddComment(replyComment); // truyền lên component cha
        }}
      />
    </div>
  );
}

export default ReplyItem;
