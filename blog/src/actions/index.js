// action
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payLoad: response
    });
  };
};
