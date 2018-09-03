import api from '../../api';
import * as t from './actionTypes'

export const newsSet = (payload) => ({
  type: t.NEWS_SET,
  ...payload
});

export const newsGet = () => async (dispatch, getState) => {
  let news = [];
  dispatch(newsSet({
    loading: true
  }));
  try {
    news = await api.getNews();
    dispatch(newsSet({
      payload: news
    }));
  } catch (error) {
    console.error(error.message);
    dispatch(newsSet({
      error: true,
      payload: error.message
    }));
  }
};

