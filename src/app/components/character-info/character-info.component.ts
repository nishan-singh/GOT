import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterInfos } from 'src/app/interface/character-infos';
import { FetchGOTService } from 'src/app/services/fetch-got.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent {
  characterInfo$: Observable<CharacterInfos[]>;
  constructor(
    private router: ActivatedRoute,
    private fetchGOT: FetchGOTService
  ) {
    const slugVal = this.router.snapshot.params['slug'];
    this.characterInfo$ = this.fetchGOT.getSingleCharacter(slugVal);
  }
}
