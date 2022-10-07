import React from 'react';

export const CommentItem = ({ comment, userName }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="div">
        <div className="flex items-center justify-center  text-sm">{userName} :</div>
      </div>
      <div className="flex text-gray-300 text-[10px]">{comment}</div>
    </div>
  );
};
