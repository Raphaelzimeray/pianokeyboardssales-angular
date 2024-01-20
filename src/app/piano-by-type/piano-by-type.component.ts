import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-piano-by-type',
  templateUrl: './piano-by-type.component.html',
  styleUrls: ['./piano-by-type.component.css']
})
export class PianoByTypeComponent implements OnInit {
  pianobytype: any = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const pianoType = this.route.snapshot.paramMap.get('type')
    fetch(`http://localhost:3000/pianosbykind/${pianoType}`).then(response =>{
      return response.json()
    })
    .then(response=>{
      this.pianobytype = response;
      console.log(this.pianobytype);
    })
  }
}
