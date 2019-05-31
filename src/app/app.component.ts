import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { GameClass } from './model/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* All the game values being currently shown */
  public gameValuesList: Array<GameClass> = [];

  constructor(private gameService: GameService) {
    this.gameService.gameValsSubj.subscribe(resp => {
      this.gameValuesList.push(...resp);
    });
  }
}
