import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  pianos = [{brand: "Roland", model: "RD88", price: "1100 €"}, {brand: "Roland", model: "RD2000", price: "2100 €"}];
}

