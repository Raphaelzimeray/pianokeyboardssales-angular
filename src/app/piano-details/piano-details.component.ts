import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-piano-details',
  templateUrl: './piano-details.component.html',
  styleUrls: ['./piano-details.component.css']
})
export class PianoDetailsComponent implements OnInit {

  piano:any = {};
  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
    const pianoId = this.route.snapshot.paramMap.get('id')
    console.log(pianoId);
    fetch(`http://localhost:3000/pianos/${pianoId}`).then(response=> {
      return response.json()
    })
    .then(response=>{
      this.piano = response;
      console.log(this.piano);
    })
  }
}
