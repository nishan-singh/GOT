import { Component } from '@angular/core';
import { House } from 'src/app/interface/house';
import { FetchGOTService } from 'src/app/services/fetch-got.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  houses: House[] = [];
  checkIfHousesLoaded: boolean = false;
  housesSubscription: any;
  foundHouses: House[] = [];

  constructor(private _fetchGOT: FetchGOTService) {
    this.getAllHouses();
    this.checkIfHousesLoaded = true;
  }

  getAllHouses() {
    this.housesSubscription = this._fetchGOT.getHouses().subscribe((data) => {
      this.houses = data;
    });
  }

  characters$ = this._fetchGOT.getCharacters();
  quotes$ = this._fetchGOT.randomQuotes();

  getRandomQuotes() {
    this.quotes$ = this._fetchGOT.randomQuotes();
  }

  searchHouses(event: InputEvent) {
    this.foundHouses = [];
    const value = (event.target as HTMLInputElement)?.value;
    if (value) {
      this.houses.forEach((house) => {
        if (house.name.toLowerCase().includes(value.toLowerCase())) {
          this.foundHouses.push(house);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.housesSubscription.unsubscribe();
  }
}
