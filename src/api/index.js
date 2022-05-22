import * as axios from "axios";
import React from 'react';


class PostService {
  axios
  static axios
  constructor() {
    this.axios = axios.create({
      baseURL: `https://fathomless-inlet-07351.herokuapp.com/`,
    })
  }
  async getСoordinates(lat, lon) {
      return this.axios.get(`/?latitude=lat=${lat}&longitude=lon=${lon}`)
  }
  async getСitys(lt, ln) {
    return this.axios.get(`/?latitude=lat=${lt}&longitude=lon=${ln}`)
  }
}

export default new PostService()
