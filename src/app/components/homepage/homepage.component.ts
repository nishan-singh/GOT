import { Component } from '@angular/core';
import { Character } from 'src/app/interface/character';
import { House } from 'src/app/interface/house';
import { FetchGOTService } from 'src/app/services/fetch-got.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  houses: House[] = [];
  characters: Character[] = [];
  checkIfHousesLoaded: boolean = false;
  housesSubscription: any;
  characterSubscript: any;
  foundHouses: House[] = [];
  foundCharacters: Character[] = [];
  searchingHouses: boolean = false;
  searchingCharacters: boolean = false;

  constructor(private _fetchGOT: FetchGOTService) {
    this.getAllHouses();
    this.getAllCharacters();
    this.checkIfHousesLoaded = true;
  }

  quotes$ = this._fetchGOT.randomQuotes();

  getAllHouses() {
    this.housesSubscription = this._fetchGOT.getHouses().subscribe((data) => {
      this.houses = data;
    });
  }

  getAllCharacters() {
    this.characterSubscript = this._fetchGOT
      .getCharacters()
      .subscribe((data) => {
        this.characters = data;
      });
  }

  getRandomQuotes() {
    this.quotes$ = this._fetchGOT.randomQuotes();
  }

  searchHousesByName(event: Event) {
    this.searchingHouses = true;
    this.foundHouses = [];
    const value = (event.target as HTMLInputElement)?.value;
    this.checkForEmptySearch(value);
    if (value) {
      this.getItemsFromSearch(this.houses, this.foundHouses, value);
    }
  }

  searchCharactersByName(event: Event) {
    this.searchingCharacters = true;
    this.foundCharacters = [];
    const value = (event.target as HTMLInputElement)?.value;
    this.checkForEmptySearch(value);
    if (value) {
      this.getItemsFromSearch(this.characters, this.foundCharacters, value);
    }
  }

  getItemsFromSearch(
    mainList: (House | Character)[],
    foundItems: (House | Character)[],
    val: string
  ) {
    mainList.forEach((item) => {
      if (item.name.toLowerCase().includes(val.toLowerCase())) {
        foundItems.push(item);
      }
    });
  }

  checkForEmptySearch(val: string) {
    if (val === '') {
      this.searchingHouses = false;
      this.searchingCharacters = false;
    }
  }

  ngOnDestroy(): void {
    this.housesSubscription.unsubscribe();
    this.characterSubscript.unsubscribe();
  }
}
