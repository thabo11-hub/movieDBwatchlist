import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/test';
import { LandingPageComponent } from '../landing-page/landing-page.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // test: Test = {
  //   title:'',
  //   duration:''
  // };
  // submitted: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  // newMovie(): void{
  //   this.submitted = false;
  //   this.test = {
  //     title:'',
  //     duration:''
  //   }
}


