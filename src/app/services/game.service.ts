import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GameClass } from '../model/game';
import { projConstants } from '../model/constant';
import { Subject } from 'rxjs';

@Injectable()
export class GameService {

    /* A VARIABLE TO HOLD VALUES FOR ALL THE GAMES */
    public allGamesVals: Array<GameClass> = [];

    /* Subject to send new Values */
    public gameValsSubj: Subject<Array<GameClass>> = new Subject();

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
                let uqObj = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

                if (uqObj != null) {

                    if (uqObj.length > 7) {
                        console.log(uqObj[0]);
                    }
                    temp.rank = parseInt(uqObj[0]);
                    temp.name = uqObj[1];
                    temp.platform = uqObj[2];
                    temp.year = parseInt(uqObj[3]);
                    temp.genre = uqObj[4];
                    temp.publisher = uqObj[5];
                    temp.globalSales = parseFloat(uqObj[6]);
                    allGameValues.push(temp);
                    if (allGen.indexOf(temp.genre) == -1)
                        allGen.push(temp.genre);
                }
            })
            this.allGamesVals = allGameValues;
            debugger;

            this.getGameValuesByFilterFn();
        });

    }


    /* A Function to filter and send the values */
    getGameValuesByFilterFn(scroll: number = 0) {
        let vals = this.allGamesVals.slice(scroll * 10, 10 + scroll * 10);
        this.gameValsSubj.next(vals);
    }

}