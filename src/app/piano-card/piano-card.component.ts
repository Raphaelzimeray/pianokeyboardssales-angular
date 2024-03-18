import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-piano-card',
  templateUrl: './piano-card.component.html',
  styleUrls: ['./piano-card.component.css']
})
export class PianoCardComponent {
  @Input() piano:any;
  getPianoLink(id:any) {
    return "/pianos/"+id
  }
}
