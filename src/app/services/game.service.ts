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
        /* Once the constructor is called get all the results */
        this.getAllGameValuesFromCSVFn();
    }


    /* A function to get all the game values from CSV */
    getAllGameValuesFromCSVFn() {
        /* a temp variable to store all the values */
        let allGameValues: Array<GameClass> = [];

        //http get to be used to get the response in text format
        this.http.get(projConstants.csvFileLoc, { responseType: 'text' }).subscribe((resp: string) => {
            let allLines = resp.split(projConstants.newLineDel);
            //splice 1st position because our csv contains headers
            allLines.splice(0, 1);

            //iterate over each element and populate allgameValues variable
            allLines.forEach(line => {
                //temp declaration
                let temp = new GameClass();
                //for each line split it accoridnly
                let uqObj = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

                //if the value is not null
                if (uqObj != null) {
                    temp.rank = parseInt(uqObj[0]);
                    temp.name = uqObj[1];
                    temp.platform = uqObj[2];
                    temp.year = parseInt(uqObj[3]);
                    temp.genre = uqObj[4];
                    temp.publisher = uqObj[5];
                    temp.globalSales = parseFloat(uqObj[6]);
                    allGameValues.push(temp);
                }
            })
            //assign the let variable value to class variable
            this.allGamesVals = allGameValues;
            //create a copy of the variable
            this.currentFilteredItems = JSON.parse(JSON.stringify(allGameValues));

            this.getGameValuesByScrollFn();
        });

    }


    /* A Function to filter and send the values */
    getGameValuesByScrollFn() {
        //get all the vals as per current scroll and from the current list of filtered items
        let vals = this.currentFilteredItems.slice(this.currentScroll * projConstants.itemToAppend,
            projConstants.itemToAppend + this.currentScroll * projConstants.itemToAppend);
        //send it through subject to all its subscription
        this.gameValsSubj.next(vals);
    }

    /* Find the item 'game' rank in it's own genre */
    gameRankInItsDomainFn(item: GameClass) {
        //Get all the games which belong to same domain names
        let domainGames = this.allGamesVals.filter(x => x.genre == item.genre);
        /* Return the index of the 'item' game from */
        return domainGames.findIndex(x => x.rank == item.rank) + 1;
    }

    /* Filter the results based on change  */
    getDataAsPerUserSearchFn(filter: FilterClass) {
        /* A temp variable to store all the games */
        let items: Array<GameClass> = this.allGamesVals;

        //1st filter by search text- if user has provided any search text filter elements 
        //accordingly
        if (filter.searchText.length > 0) {
            items = items.filter(x => {
                return x.name.toLowerCase().indexOf(filter.searchText.toLowerCase()) > -1
                    || x.genre.toLowerCase().indexOf(filter.searchText.toLowerCase()) > -1
            });
        }

        /* Now sort by the sort type -
        1: By Rank 
        2: By Year
        3: By Genre
        */
        if (filter.sortType == 2) {
            items.sort((a, b) => { return a.year - b.year })
        }
        else if (filter.sortType == 3) {
            items.sort((a, b) => { return <any>a.genre.localeCompare(b.genre) })
        }
        else if (filter.sortType == 1) {
            items.sort((a, b) => { return a.rank - b.rank; });
        }

        //Assign the filtered list to the current list of filtered item
        this.currentFilteredItems = items;
        //assign current scroll as 0 as we want the items to start from top
        this.currentScroll = 0;
        /* scroll top top */
        window.scrollTo(0, 0);

        this.getGameValuesByScrollFn();
    }


}