import axios from "axios";

const API = {
  // Gets all books
  getFavs: function () {
    return axios.get("/");
  },
  getFav: function (id) {
    return axios.get("/api/favorite/" + id);
  },
  // Deletes the book with the given id
  deleteFav: function () {
    return axios.delete("/api/favorite/");
  },
  // Saves a book to the database
  saveFavs: function (FavData) {
    return axios.post("/", FavData);
  },
};

export default API;
