import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Comment.module.scss';
import CommentContent from './CommentContent';

const cx = classNames.bind(styles);

function ReplyItem({ data }) {
  const [replyReport, setReplyReport] = useState(false);

  return (
    <div className={cx('reply-item')}>
      <CommentContent data={data} report={replyReport} onReport={setReplyReport} />
    </div>
  );
}

export default ReplyItem;
