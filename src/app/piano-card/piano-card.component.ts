import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-piano-card',
  templateUrl: './piano-card.component.html',
  styleUrls: ['./piano-card.component.css']
})
export class PianoCardComponent {
  @Input() piano:any;
  @Output() onClick = new EventEmitter<string>();
  getPianoLink(id:any) {
    return "/pianos/"+id
  }
  onPianoClick(){
    this.onClick.emit();
  }
}
