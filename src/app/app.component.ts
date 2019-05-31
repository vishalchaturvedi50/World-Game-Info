import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public gameService: GameService) { }

  /* SCROLL TO TOP FN */
  scrollToTopFn() {
    window.scrollTo(0, 0);
  }

}
