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
        /* SUBS to game value subj which will return result on the basics of filter */
        this.gameService.gameValsSubj.subscribe(resp => {
            //if we are already scrolled them push the items
            if (this.gameService.currentScroll > 0)
                this.gameValuesList.push(...resp);
            else // else assign the response
                this.gameValuesList = resp;
        });
    }

    /* ON SCROLL FUNCTION 
    As user scroll happen this function get an event
    */
    @HostListener('window:scroll', ['$event'])
    onScrollFn() {
        //We know there will be a body hence 
        var scrollTop = window.scrollY;
        var docHeight = document.getElementsByTagName("body")[0].scrollHeight;
        var winHeight = window.outerHeight;
        var scrollPercent = scrollTop / (docHeight - winHeight);
        if (scrollPercent > 0.8) { // IF TOTAL SCROLL has crossed 80% then get new elements
            this.gameService.currentScroll++;
            this.gameService.getGameValuesByScrollFn();
        }
    }


    /* A helper function to get games rank in its own domain */
    gameRankInItsDomainFn(item: GameClass) {
        return this.gameService.gameRankInItsDomainFn(item);
    }

}