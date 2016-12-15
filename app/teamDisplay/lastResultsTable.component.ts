import { Component, Input, ViewContainerRef, NgModule } from '@angular/core';
import { MaterialModule, MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import { TeamComponent } from './team.component';
import { TeamSimpel } from './../lastResults/teamSimpel';
import { Time } from './time';


@Component({
  selector: 'lastResultsTable',
  template: `<table class="table">
            <thead>
            <tr>
            <th class="show-gt-md"></th>
            <th style="max-width: 50px">
                Pos
            </th>
            <th class="show-gt-md">
                Veld
            </th>
            <th>
                Rug#
            </th>
            <th style="max-width: 150px">
                Ploeg
            </th>
            <th class="show-gt-md">
                Slag
            </th>
            <th *ngIf="location > 0" [ngClass]="setClasses(1)">
                Tussentijd 1
            </th>
            <th *ngIf="location > 1" [ngClass]="setClasses(2)">
                Tussentijd 2
            </th>
            <th *ngIf="location > 2" [ngClass]="setClasses(3)">
                Tussentijd 3
            </th>
            <th *ngIf="location > 3" [ngClass]="setClasses(4)">
                Tussentijd 4
            </th>
            <th *ngIf="location > 4" [ngClass]="setClasses(5)">
                Finishtijd
            </th>
        </tr>
        </thead>
        <tr *ngFor="let team of teams; trackBy:row?.raceid" (click)="openTeam(team)">
              <td class="show-gt-md">
                <club-oars [team]=team></club-oars>
            </td>
            <td>
                {{team.rank}} / {{team.participants}}
            </td>
            <td class="show-gt-md">
                <span *ngIf="team.fieldnameshortsub !== '0'">
                    {{team.fieldnameshortsub}}
                </span>
                <span *ngIf="team.fieldnameshortsub === '0'">
                    {{team.fieldnameshort}}
                </span>
            </td>
            <td>
                {{team.backnumber}}
            </td>
            <td class="teamname" style="max-width: 150px">
                {{team.teamname}}
            </td>
            <td class="show-gt-md">
                {{team.rower8}}
            </td>
            <td *ngIf="location > 0" [ngClass]="setClasses(1)">
                {{formatTime(team.splash1)}}
            </td>
            <td *ngIf="location > 1" [ngClass]="setClasses(2)">
                {{formatTime(team.splash2)}}
            </td>
            <td *ngIf="location > 2" [ngClass]="setClasses(3)">
                {{formatTime(team.splash3)}}
            </td>
            <td *ngIf="location > 3" [ngClass]="setClasses(4)">
                {{formatTime(team.splash4)}}
            </td>
            <td *ngIf="location > 4" id="finish">
                <span *ngIf="team.disqualified==1">
                    Gedisqualificeerd
                </span>
                <span *ngIf="team.excluded==1">
                    Excluded
                </span>
                <span *ngIf="team.excluded==0 && team.disqualified==0">
                    {{formatTime(finalTime(team.totaltime,team.bonussecond))}}
                </span>
            </td>
        </tr>`,
  styles: [`.show-gt-md {
                max-width:150px;
            }
            .teamname {
                font-weight: 500;
            }
            .teamname:hover {
                cursor: pointer;
            }
            td {
                text-align: center;
            }
            @media screen and (max-width:800px) {  .show-gt-md {display: none;}}
            @media screen and (max-width:480px) {  .show-gt-sm {display: none;}}
          }`],
  providers: [ Time ],
})

export class LastResultsTableComponent { 
    constructor(private time: Time, public team: MdDialog, public viewContainerRef: ViewContainerRef){ }
    dialogRef: MdDialogRef<any>;
    @Input() teams: TeamSimpel[];
    @Input() location: number;
    setClasses(splash : number) {     
        return {'show-gt-sm': !(splash == this.location)}
    }

    formatTime (time: string) {
        return this.time.formatTime(time);
    }

    finalTime(time : string, bonussecond: string) {
        return this.time.finalTime(time,bonussecond);
    }

    openTeam(team :TeamSimpel) {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.team.open(TeamComponent, config);
        this.dialogRef.componentInstance.team = team;
        this.dialogRef.afterClosed().subscribe(result => {
        this.dialogRef = null;
        });
    }
}