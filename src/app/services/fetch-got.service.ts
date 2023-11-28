import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../interface/house';
import { Character } from '../interface/character';
import { Quote } from '../interface/quote';
import { HouseInfos } from '../interface/house-infos';
import { CharacterInfos } from '../interface/character-infos';

@Injectable({
  providedIn: 'root',
})
export class FetchGOTService {
  constructor(private _http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this._http.get<House[]>(
      'https://api.gameofthronesquotes.xyz/v1/houses'
    );
  }

  getMembers(slug: string): Observable<HouseInfos[]> {
    return this._http.get<HouseInfos[]>(
      `https://api.gameofthronesquotes.xyz/v1/house/${slug}`
    );
  }

  getCharacters(): Observable<Character[]> {
    return this._http.get<Character[]>(
      'https://api.gameofthronesquotes.xyz/v1/characters'
    );
  }

  getSingleCharacter(slug: string): Observable<CharacterInfos[]> {
    return this._http.get<CharacterInfos[]>(
      `https://api.gameofthronesquotes.xyz/v1/character/${slug}`
    );
  }

  getQuotes(slug: string): Observable<Object> {
    return this._http.get(
      `https://api.gameofthronesquotes.xyz/v1/character/${slug}/quotes`
    );
  }

  randomQuotes(): Observable<Quote[]> {
    return this._http.get<Quote[]>(
      'https://api.gameofthronesquotes.xyz/v1/random/5'
    );
  }
}
