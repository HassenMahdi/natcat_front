import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  years=[]
  constructor(){
    for (let i = 1994; i<=new Date().getFullYear(); i ++) this.years.unshift(i)
  }
}
