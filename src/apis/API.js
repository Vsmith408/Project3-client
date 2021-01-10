import axios from "axios";

export default {
  // Gets all favorites
  getFavs: function() {
    return axios.get("/api/favorite");
  },
  getFav: function(id) {
      return axios.get("/api/favorite/" + id);
  },
  // Deletes the favorite with the given id
  deleteFav: function(id) {
    return axios.delete("/api/favorite/" + id);
  },
  // Saves a favorite to the database
  saveFavs: function() {
    return axios.post("/api/favorite/");
  }
};