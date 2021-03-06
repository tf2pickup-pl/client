import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PlayersService } from './players.service';
import { map, mergeMap } from 'rxjs/operators';
import { loadPlayer, playerLoaded, loadPlayers, playersLoaded, loadPlayerBans, playerBansLoaded, revokePlayerBan, playerBanUpdated,
  addPlayerBan, playerBanAdded } from './actions';

@Injectable()
export class PlayerEffects {

  loadPlayer = createEffect(() =>
    this.actions.pipe(
      ofType(loadPlayer),
      mergeMap(({ playerId }) => this.playersService.fetchPlayer(playerId)),
      map(player => playerLoaded({ player })),
    )
  );

  loadAllPlayers = createEffect(() =>
    this.actions.pipe(
      ofType(loadPlayers),
      mergeMap(() => this.playersService.fetchAllPlayers().pipe(
        map(players => playersLoaded({ players })),
      )),
    )
  );

  loadPlayerBans = createEffect(() =>
    this.actions.pipe(
      ofType(loadPlayerBans),
      mergeMap(({ playerId }) => this.playersService.fetchPlayerBans(playerId).pipe(
        map(playerBans => playerBansLoaded({ playerBans })),
      )),
    )
  );

  addPlayerBan = createEffect(() =>
    this.actions.pipe(
      ofType(addPlayerBan),
      mergeMap(({ playerBan: ban }) => this.playersService.addPlayerBan(ban).pipe(
        map(playerBan => playerBanAdded({ playerBan })),
      )),
    )
  );

  revokePlayerBan = createEffect(() =>
    this.actions.pipe(
      ofType(revokePlayerBan),
      mergeMap(({ playerBan: ban }) => this.playersService.revokePlayerBan(ban).pipe(
        map(playerBan => playerBanUpdated({ playerBan })),
      )),
    )
  );

  constructor(
    private actions: Actions,
    private playersService: PlayersService,
  ) { }

}
