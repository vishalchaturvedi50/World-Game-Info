import { Component, HostListener } from '@angular/core';
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

  /*  */
  public scrollNo = 1;

  constructor(private gameService: GameService) {
    this.gameService.gameValsSubj.subscribe(resp => {
      this.gameValuesList.push(...resp);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScrollFn() {
    //We know there will be a body hence 
    var scrollTop = window.scrollY;
    var docHeight = document.getElementsByTagName("body")[0].scrollHeight;
    var winHeight = window.outerHeight;
    var scrollPercent = scrollTop / (docHeight - winHeight);
    if (scrollPercent > 0.8) {
      this.scrollNo++;
      this.gameService.getGameValuesByFilterFn(this.scrollNo);
    }
  }

  gameRankInItsDomainFn(item: GameClass) {
    return this.gameService.gameRankInItsDomainFn(item);
  }


}
