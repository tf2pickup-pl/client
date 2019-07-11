import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './queue.reducer';
import { QueueContainerComponent } from './queue-container/queue-container.component';
import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue/queue.component';
import { QueueStatusComponent } from './queue-status/queue-status.component';
import { EffectsModule } from '@ngrx/effects';
import { QueueEffects } from './queue.effects';
import { QueuePlayerListItemComponent } from './queue-player-list-item/queue-player-list-item.component';
import { QueuePlayerListComponent } from './queue-player-list/queue-player-list.component';

@NgModule({
  declarations: [
    QueueContainerComponent,
    QueueComponent,
    QueueStatusComponent,
    QueuePlayerListItemComponent,
    QueuePlayerListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('queue', reducer),
    EffectsModule.forFeature([QueueEffects]),

    QueueRoutingModule,
  ],
})
export class QueueModule { }
