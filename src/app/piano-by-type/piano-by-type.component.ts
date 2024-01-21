import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-piano-by-type',
  templateUrl: './piano-by-type.component.html',
  styleUrls: ['./piano-by-type.component.css']
})
export class PianoByTypeComponent implements OnInit {
  pianobytype: any = [];
  pianoType: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.init();
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.init()
      console.log(event);
    });
  }
  private init() {
    this.pianoType = this.route.snapshot.paramMap.get('type');
    fetch(`http://localhost:3000/pianosbykind/${this.pianoType}`).then(response => {
      return response.json();
    })
      .then(response => {
        this.pianobytype = response;
        console.log(this.pianobytype);
      });
  }

  getPianoLink(id:any) {
    return "/pianos/"+id
  }
}
