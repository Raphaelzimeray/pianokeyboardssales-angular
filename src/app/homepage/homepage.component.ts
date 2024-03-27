import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  openedPiano: any = null;
  pianos: any = []; // attribut de class ou variable d'instance en ruby
  paginatedPianos: any = [];
  numberOfItemsPerPage: number = 4;
  numberOfPages: number = 0;
  currentPage: number = 0;
  ngOnInit() {
    fetch('http://localhost:3000/pianos')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.pianos = response;
        this.updatePianos()
        this.numberOfPages = this.pianos.length / this.numberOfItemsPerPage;
        console.log(this.numberOfPages);
      });

  }

  updatePianos(){
    const firstindexLeftElement = this.currentPage * this.numberOfItemsPerPage;
    const secondindexRightElement = (this.currentPage + 1) * this.numberOfItemsPerPage;
    this.paginatedPianos = this.pianos.slice(
      firstindexLeftElement,
      secondindexRightElement
    );
  }

  incrementPagination(){
    this.currentPage = this.currentPage + 1;
    this.updatePianos()
    console.log(this.currentPage);
  }

  decrementPagination(){
    this.currentPage = this.currentPage - 1;
    this.updatePianos()
  }


  openCard(piano: any) {
    this.openedPiano = piano;
  }

  closeCard() {
    this.openedPiano = null;
  }



  // l'id est juste valable ce temps la alors que "pianos" on en a besoin
  // tout le temps pour afficher
}
