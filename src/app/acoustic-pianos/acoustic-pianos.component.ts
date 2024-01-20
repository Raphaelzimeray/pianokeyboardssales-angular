import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acoustic-pianos',
  templateUrl: './acoustic-pianos.component.html',
  styleUrls: ['./acoustic-pianos.component.css']
})
export class AcousticPianosComponent implements OnInit {
  acousticpianos: any = [];
  ngOnInit(){
    fetch("http://localhost:3000/pianos-acoustic").then(response =>{
      return response.json()
    })
    .then(response=>{
      this.acousticpianos = response;
      console.log(this.acousticpianos);
    })
  }
}
