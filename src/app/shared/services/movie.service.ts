import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: false,
    include_video: false,
    language: 'en-US',
  },
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzAwNWYxYjQ1ODY0MjAzMTlhZGVmZmE5OTY4OWJkMyIsInN1YiI6IjY0YTk0ZmRiYjY4NmI5MDE1MDBmNDk2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJjnx3wNcpEqykVG0FH0Ya5WT1oHwCYiwWHN4d870Qc'
  }
};

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  constructor(public http: HttpClient) { }

  // Get Movies 
  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie', options)
  }
}
