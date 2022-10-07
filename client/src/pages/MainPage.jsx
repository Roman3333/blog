import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopularPost } from '../components/PopularPost';
import { LastComment } from '../components/LastComment';
import { PostItem } from '../components/PostItem';

import { getAllPosts } from '../redux/features/post/postSlice';
import { getLastComments } from '../redux/features/comment/commentSlice';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts, loading } = useSelector((state) => state.post);
  const { last5Comments, postsIsLoading } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getLastComments());
  }, [dispatch]);

  if (loading) {
    return <div className="text-xl text-center text-white py-10">Постов не существует.</div>;
  }

  return (
    <div className="max-w-[950px] mx-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5">
          {posts?.map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
        </div>
        <div className="basis-1/5">
          <div className="text-xs uppercase text-white">Популярные посты:</div>
          {popularPosts?.map((post, idx) => (
            <PopularPost key={idx} post={post} />
          ))}
          <div className="text-xs uppercase text-white mt-8">Последние комментарии:</div>
          {!postsIsLoading ? (
            Object.values(last5Comments)[0]?.map((comment, index) => {
              return <LastComment key={index} {...comment} />;
            })
          ) : (
            <div>Загрузка комментариев</div>
          )}
        </div>
      </div>
    </div>
  );
};
