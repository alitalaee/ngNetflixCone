import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IVideoContent } from 'src/app/shared/models/video-content.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-browes',
  templateUrl: './browes.component.html',
  styleUrls: ['./browes.component.scss']
})
export class BrowesComponent {
  // USER Auth 
  name = JSON.parse(sessionStorage.getItem('netflix_user')!).name
  email = JSON.parse(sessionStorage.getItem('netflix_user')!).email
  picture = JSON.parse(sessionStorage.getItem('netflix_user')!).picture

  IVideoContent?: IVideoContent[] = [];
  constructor(public auth: AuthService, public movie: MovieService) {
    this.movie.getMovies().subscribe((res: any) => {
      console.log(res);
      this.IVideoContent = res.results
    })
  }





  signOut() {
    this.auth.signOut();
  }

}
