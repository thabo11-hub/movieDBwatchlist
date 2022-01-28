import { Component, OnInit  , Inject} from '@angular/core';
import { Router } from '@angular/router';

import { Action } from 'rxjs/internal/scheduler/Action';
import { MoviesService } from '../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { subscribeOn } from 'rxjs';
import { Test } from 'src/app/test';

import { LandingPageComponent } from '../landing-page/landing-page.component';



@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  store: any;
  submitted = false;
  movies?: Test[];
  currentMovie :Test = {};
  currentIndex = -1;

  constructor( private moviesService:MoviesService,
                private router:Router ) { }
  ngOnInit(): void {
      this.retrieveMovie();
    throw new Error('Method not implemented.');
  }
  


createMovies(): void{
  this.moviesService.create(this.currentMovie)
    subscribe(
      response => {
        console.log(response);
        
        this.router.navigate(['/watchList']);
      },
      error => {
        console.log(error);
      });
}

  deleteMovies(): void{
    this.moviesService.delete(this.currentMovie)
      subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/watchList']);
        },
        error => {
          console.log(error);
        });
  }
setActiveMovie(movie: Test,index: number): void{
  this.currentMovie = movie;
  this.currentIndex = index;
}


//   public delete() {
//     this.store.dispatch(this.data.delete);
//     if (this.data.go !== undefined) {
//       this.store.dispatch(this.data.go);
//     }
//     this.close();
//   // }
//   close() {
//     throw new Error('Method not implemented.');
  
refreshList(): void{
    this.retrieveMovie();

  }

  removeAllMovies(): void{
    this.moviesService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveMovie();
        },
        error => {
          console.log(error);
        });
  }

retrieveMovie():void{
  this.moviesService.getAll()
    .subscribe({
      next: (data:Test[] | undefined) =>
      {
        console.log(data);
      },
      error:(e: any) => console.error(e)
      
    });
}

}


function data(data: any) {
  throw new Error('Function not implemented.');
}

function subscribe(arg0: (Response: any) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}

