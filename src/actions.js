import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";
import axios from "axios";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: response.data });
  }
  catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};