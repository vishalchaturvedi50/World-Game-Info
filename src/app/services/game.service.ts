import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GameClass } from '../model/game';
import { projConstants } from '../model/constant';
import { Subject } from 'rxjs';
import { FilterClass } from '../model/filter';

@Injectable()
export class GameService {

    /* A VARIABLE TO HOLD VALUES FOR ALL THE GAMES */
    public allGamesVals: Array<GameClass> = [];

    /* A VARIABLE TO STORE CURRENT FILTERED ITEMS */
    public currentFilteredItems: Array<GameClass> = [];

    /* Subject to send new Values */
    public gameValsSubj: Subject<Array<GameClass>> = new Subject();

    /* CURRENT SCROLL */
    public currentScroll: number = 0;


    constructor(private http: HttpClient) {
        this.getAllGameValuesFromCSVFn();
    }


    /* A function to get all the game values from CSV */
    getAllGameValuesFromCSVFn() {
        let allGameValues: Array<GameClass> = [];
        let allGen: Array<string> = [];
        this.http.get(projConstants.csvFileLoc, { responseType: 'text' }).subscribe((resp: string) => {
            let allLines = resp.split(projConstants.newLineDel);
            allLines.splice(0, 1);

            allLines.forEach(line => {
                let temp = new GameClass();

                let uqObj = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

                if (uqObj != null) {


                    temp.rank = parseInt(uqObj[0]);
                    temp.name = uqObj[1];
                    temp.platform = uqObj[2];
                    temp.year = parseInt(uqObj[3]);
                    temp.genre = uqObj[4];
                    temp.publisher = uqObj[5];
                    temp.globalSales = parseFloat(uqObj[6]);
                    allGameValues.push(temp);
                    if (allGen.indexOf(temp.genre) == -1) {
                        allGen.push(temp.genre);
                    }
                }
            })
            this.allGamesVals = allGameValues;
            this.currentFilteredItems = JSON.parse(JSON.stringify(allGameValues));

            this.getGameValuesByScrollFn();
        });

    }


    /* A Function to filter and send the values */
    getGameValuesByScrollFn() {
        let vals = this.currentFilteredItems.slice(this.currentScroll * projConstants.itemToAppend,
            projConstants.itemToAppend + this.currentScroll * projConstants.itemToAppend);
        this.gameValsSubj.next(vals);
    }

    /* Find the item 'game' rank in it's own genre */
    gameRankInItsDomainFn(item: GameClass) {
        let domainGames = this.allGamesVals.filter(x => x.genre == item.genre);
        return domainGames.findIndex(x => x.rank == item.rank) + 1;
    }

    /* Filter the results based on change  */
    getDataAsPerUserSearchFn(filter: FilterClass) {
        let items = this.allGamesVals;
        if (filter.searchText.length > 0) {
            items = items.filter(x => {
                return x.name.toLowerCase().indexOf(filter.searchText.toLowerCase()) > -1
                    || x.genre.toLowerCase().indexOf(filter.searchText.toLowerCase()) > -1
            });
        }

        if (filter.sortType == 2) {
            items.sort((a, b) => { return a.year - b.year })
        }
        else if (filter.sortType == 3) {
            items.sort((a, b) => { return <any>a.genre.localeCompare(b.genre) })
        }

        this.currentFilteredItems = items;
        this.currentScroll = 0;
        window.scrollTo(0, 0);
        this.getGameValuesByScrollFn();

    }


}