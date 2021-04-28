import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people: any[] = [
    { "name": "1  Pace" },
    { "name": "2  Pace" },
    { "name": "3  Pace" },
    { "name": "4  Pace" },
    { "name": "5  Pace" },
    { "name": "6  Pace" },
    { "name": "7  Pace" },
    { "name": "8  Pace" },
    { "name": "9  Pace" },
    { "name": "10  Pace" },
    { "name": "11  Pace" },
  ];
  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }
}
