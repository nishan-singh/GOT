import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HouseInfos } from 'src/app/interface/house-infos';
import { FetchGOTService } from 'src/app/services/fetch-got.service';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.scss'],
})
export class HouseInfoComponent {
  house$?: Observable<HouseInfos[]>;

  constructor(
    private router: ActivatedRoute,
    private fetchGOT: FetchGOTService
  ) {}

  ngOnInit(): void {
    const slugVal = this.router.snapshot.params['slug'];
    this.house$ = this.fetchGOT.getMembers(slugVal);
  }
}
