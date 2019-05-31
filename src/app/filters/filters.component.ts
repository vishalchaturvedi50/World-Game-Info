import { Component } from '@angular/core';
import { FilterClass } from '../model/filter';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-filters',
    templateUrl: 'filters.html',
    styleUrls: ['filters.scss']
})
export class FiltersComponent {


    /* A variable to hold initial filters */
    public filter: FilterClass = new FilterClass();

    constructor(private gameService: GameService) {

    }

    changeInFilterValueFn() {
        this.gameService.getDataAsPerUserSearchFn(this.filter);
    }
}