import axios from "axios";
import _ from "lodash";

export const jsonPlaceHolder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export const randomUserRequest = axios.create({
  baseURL: "https://randomuser.me/api/"
});

export const fetchUser = _.memoize(async userId => {
  const res = await jsonPlaceHolder.get(`/users/${userId}`);
  return res.data;
});
