import axios from "axios";

export function makePostRequest(path, queryObj) {
  axios.post(path, queryObj).then(
    (response) => {
      const result = response.data;
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
}
