import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pianos: any = []; // attribut de class ou variable d'instance en ruby
  ngOnInit() {
    fetch("http://localhost:3000/pianos").then(response=> {
      return response.json()
    })
    .then(response=>{
      this.pianos = response;
      console.log(this.pianos);
    })
  }
  getPianoLink(id:any) {
    return "/pianos/"+id
  }
  // l'id est juste valable ce temps la alors que "pianos" on en a besoin
  // tout le temps pour afficher
}
