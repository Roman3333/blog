import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  comments: [],
  last5Comments: [],
  postsIsLoading: false,
};

export const createComment = createAsyncThunk(
  'comment/createComment',
  async ({ postId, comment, userName }) => {
    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        postId,
        comment,
        userName,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getPostComments = createAsyncThunk('comment/getPostComments', async (postId) => {
  try {
    const { data } = await axios.get(`/posts/comments/${postId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getLastComments = createAsyncThunk('comment/getLastComments', async () => {
  try {
    const { data } = await axios.get('/comments/lastComments');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    // Создание поста
    [createComment.pending]: (state) => {
      state.postsIsLoading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.postsIsLoading = false;
      state.comments.push(action.payload);
    },
    [createComment.rejected]: (state) => {
      state.postsIsLoading = false;
    },
    // Получение комментов поста
    [getPostComments.pending]: (state) => {
      state.postsIsLoading = true;
    },
    [getPostComments.fulfilled]: (state, action) => {
      state.postsIsLoading = false;
      state.comments = action.payload;
    },
    [getPostComments.rejected]: (state) => {
      state.postsIsLoading = false;
    },
    // Получение последних 5 комментариев
    [getLastComments.pending]: (state) => {
      state.postsIsLoading = true;
    },
    [getLastComments.fulfilled]: (state, action) => {
      state.postsIsLoading = false;
      state.last5Comments = action.payload;
    },
    [getLastComments.rejected]: (state) => {
      state.postsIsLoading = false;
    },
  },
});

export default commentSlice.reducer;
