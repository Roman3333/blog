import React from 'react';

export const LastComment = ({ comment, userName }) => {
  return (
    <div className="flex  gap-3">
      <div className="div">
        <div className="flex justify-center text-gray-400  text-[14px]">{`${userName}:`}</div>
      </div>
      <div className="flex text-gray-300 text-[12px]">{comment}</div>
    </div>
  );
};
