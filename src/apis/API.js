import axios from 'axios'

const API = {
  // Gets all books
  getFavs: function () {
    return axios.get(process.env.REACT_APP_API_URL + '/api/favorite')
  },
  getFav: function (id) {
    return axios.get(process.env.REACT_APP_API_URL + '/api/favorite/' + id)
  },
  // Deletes the book with the given id
  deleteFav: function (id) {
    return axios.delete(process.env.REACT_APP_API_URL + '/api/favorite/' + id)
  },
  // Saves a book to the database
  saveFavs: function (favData) {
    return axios.post(process.env.REACT_APP_API_URL + '/api/favorite', favData)
  },
}

export default API
