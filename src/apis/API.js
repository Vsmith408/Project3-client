import axios from "axios";

const API = {
  // Gets all books
  getFavs: function () {
    return axios.get("/api/favorite");
  },
  getFav: function (id) {
    return axios.get("/api/favorite/" + id);
  },
  // Deletes the book with the given id
  deleteFav: function (id) {
    return axios.delete("/api/favorite/" + id);
  },
  // Saves a book to the database
  saveFavs: function (FavData) {
    return axios.post("/api/favorite", FavData);
  },
};

export default API;
