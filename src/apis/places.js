import axios from "axios";

export default axios.create({
  baseURL: "http://maps.googleapis.com/maps/api/place/",
  headers: {
    Authorization: "AIzaSyAgyAAPxiaxnD23FRxnI03LYR7TKavLk1Q",
  },
});
