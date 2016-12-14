import { Component, Input } from '@angular/core';
import { TeamSimpel } from './../lastResults/teamSimpel';


@Component({
  selector: 'teamSimpelteam',
  template: `<td>
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
            <td style="max-width: 150px">
                <a href="">
                    {{team.teamname}}
                </a>
            </td>
            <td class="show-gt-md">
                {{team.teamer8}}
            </td>
            <td *ngIf="location > 0" [ngClass]="setClasses(1)">
                {{team.splash1}}
            </td>
            <td *ngIf="location > 1" [ngClass]="setClasses(2)">
                {{team.splash2}}
            </td>
            <td *ngIf="location > 2" [ngClass]="setClasses(3)">
                {{team.splash3}}
            </td>
            <td *ngIf="location > 3" [ngClass]="setClasses(4)">
                {{team.splash4}}
            </td>
            <td *ngIf="location > 4" id="finish">
                <span *ngIf="team.disqualified==1">
                    Gedisqualificeerd
                </span>
                <span *ngIf="team.excluded==1">
                    Excluded
                </span>
                <span *ngIf="team.excluded==0 && team.disqualified==0">
                    {{team.totaltime + team.bonussecond}}
                </span>
            </td>`,
  styles: [`
            @media screen and (max-width:600px) {  .show-gt-md {display: none;}}
            @media screen and (max-width:480px) {  .show-gt-sm {display: none;}}`],
})

export class TeamSimpelComponent { 
    @Input() team: TeamSimpel;
    @Input() location: number;
    setClasses(splash : number) {     
        return {'show-gt-sm': !(splash == this.location)}
    }
}