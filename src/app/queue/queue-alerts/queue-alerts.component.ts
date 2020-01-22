import { Component, ChangeDetectionStrategy } from '@angular/core';
import { activeGame } from '@app/games/games.selectors';
import { Store, select } from '@ngrx/store';
import { bans } from '@app/profile/profile.selectors';
import { substituteRequests } from '../queue.selectors';

@Component({
  selector: 'app-queue-alerts',
  templateUrl: './queue-alerts.component.html',
  styleUrls: ['./queue-alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueueAlertsComponent {

  activeGame = this.store.select(activeGame);
  bans = this.store.select(bans);
  substituteRequests = this.store.select(substituteRequests);

  constructor(
    private store: Store<{}>,
  ) { }

}
