import React from 'react';
import Helper from '../../../../helper';

export default function CommentsLength({ comments, slow }) {
  Helper.applySlowPerformance(slow);
  const response = comments.read();
  return (
    <span className="comment-length">
      <strong>{response.length}</strong> avaliaçōes
    </span>
  );
}
