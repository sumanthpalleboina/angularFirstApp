import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
  postTitle:string="";
  postDetails:string="";
  postImageUlr:string="";
  postUrl:string="";
  addBackground:boolean=false;
}
