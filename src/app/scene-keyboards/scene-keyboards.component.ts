import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-keyboards',
  templateUrl: './scene-keyboards.component.html',
  styleUrls: ['./scene-keyboards.component.css']
})
export class SceneKeyboardsComponent implements OnInit {
  scenekeyboards: any = [];
  ngOnInit() {
    fetch("http://localhost:3000/scene-keyboards").then(response =>{
      return response.json()
    })
    .then(response=>{
      this.scenekeyboards = response;
      console.log(this.scenekeyboards);
    })
  }

}
