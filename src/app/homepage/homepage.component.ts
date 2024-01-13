import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pianos: any = [];
  ngOnInit() {
    fetch("http://localhost:3000/pianos").then(response=> {
      return response.json()
    })
    .then(response=>{
      this.pianos = response;
    })
  }
}
