import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { Test } from 'src/app/test'; //model

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  store: any;
  submitted = false;
  movies:any;
  currentMovie = null;

test: Test = {
  title:'',
  duration:'', 
  id: ''
};

  constructor( private moviesService:MoviesService,
    private router:Router ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newMovie(): void{
        this.submitted = false;
        this.test = {
          title:'',
          duration:''
        }
    }
  
    saveMovie(): void {
      const data = {
        title: this.movies.title,
        duration: this.movies.duration,

      };
  
  
      this.moviesService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      (      error: any) => {
        console.log(error);
      });
}

    createMovies(): void{
      this.moviesService.create(this.currentMovie)
        .subscribe(
          response => {
            console.log(response);
            
            this.router.navigate(['/watchList']);
          },
          error => {
            console.log(error);
          });
    }    

  getMovie(/* id */): void{
    this.moviesService.getAll(/* id */)
      .subscribe(
        data => {
          this.currentMovie = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  deleteMovies(): void{
    this.moviesService.delete(this.currentMovie)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/watchList']);
        },
        (        error: any) => {
          console.log(error);
        });
  }


  

// function data(data: any) {
//    throw new Error('Function not implemented.');
// }
    }    
