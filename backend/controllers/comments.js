import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

export const createComment = async (req, res) => {
  try {
    const { postId, comment, userName } = req.body;

    if (!comment) return res.json({ message: 'Комментарий не может быть пустым' });

    const newComment = new Comment({ comment, userName });
    await newComment.save();

    try {
      await Post.findByIdAndUpdate(postId, {
        $push: { comments: newComment._id },
      });
    } catch (error) {
      console.log(error);
    }

    res.json(newComment);
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' });
  }
};

export const getLastComments = async (req, res) => {
  try {
    const lastComments = await Comment.find().limit(5).sort('-createdAt');

    res.json({ lastComments });
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' });
  }
};
