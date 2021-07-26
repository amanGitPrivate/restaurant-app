import axios from "axios";

const baseUrl = `https://goodtill-frontend-interview.herokuapp.com`;

export const get = (url: string) =>
  axios
    .get(`${baseUrl}/${url}`)
    .then(function (response) {
      // handle success
      const { data } = response;
      return data;
    })
    .catch(function (error) {
      throw error;
    });

export const post = (url: string, payload: any) =>
  axios
    .post(`${baseUrl}/${url}`, payload)
    .then(function (response) {
      const { data } = response;
      return data;
    })
    .catch(function (error) {
      throw error;
    });
