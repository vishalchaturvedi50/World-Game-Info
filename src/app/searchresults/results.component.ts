import { Component, HostListener } from '@angular/core';
import { GameClass } from '../model/game';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-results',
    templateUrl: 'results.html',
    styleUrls: ['results.scss']
})
export class ResultsComponent {


    /* All the game values being currently shown */
    public gameValuesList: Array<GameClass> = [];

    constructor(private gameService: GameService) {
        this.gameService.gameValsSubj.subscribe(resp => {
            if (this.gameService.currentScroll > 0)
                this.gameValuesList.push(...resp);
            else
                this.gameValuesList = resp;
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
            this.gameService.currentScroll++;
            this.gameService.getGameValuesByScrollFn();
        }
    }

    gameRankInItsDomainFn(item: GameClass) {
        return this.gameService.gameRankInItsDomainFn(item);
    }

}