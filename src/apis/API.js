import axios from "axios";

export default {
  // Gets all books
  getFavs: function() {
    return axios.get("/api/favs");
  },
  getFav: function(id) {
      return axios.get("/api/favs/" + id);
  },
  // Deletes the book with the given id
  deleteFav: function(id) {
    return axios.delete("/api/favs/" + id);
  },
  // Saves a book to the database
  saveFavs: function() {
    return axios.post("/api/favs");
  }
};