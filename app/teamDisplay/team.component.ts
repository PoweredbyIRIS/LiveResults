import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar, MdTabChangeEvent } from '@angular/material';
import { TeamSimpel } from './../lastResults/teamSimpel';
import { Time } from './time';


@Component({
  selector: 'team',
  template: `<h2> {{team.teamname}}</h2>
  <table class="teamtable table" style="text-align: left">
      <tbody>
      <tr *ngIf="team.clubname">
        <td><b>Vereniging</b></td>
        <td>{{team.clubname}}</td>
      </tr>
      <tr *ngIf="team.backnumber">
        <td><b>Rugnummer</b></td>
        <td>{{team.backnumber}}</td>
      </tr>
      <tr>
        <td><b>Veld</b></td>
        <td>{{team.fieldnameshort}}</td>
      </tr>
      <tr *ngIf="team.fieldnameshortsub !== team.fieldnameshort && team.fieldnameshortsub !== '0'">
        <td><b>Subveld</b></td>
        <td>{{team.fieldnameshortsub}}</td>
      </tr>
      <tr *ngIf="team.splash1 !== '0.00' && team.splash1">
        <td><b>Tussentijd 1</b></td>
        <td>{{formatTime(team.splash1)}}</td>
      </tr>
      <tr *ngIf="team.splash2 !== '0.00' && team.splash2">
        <td><b>Tussentijd 2</b></td>
        <td>{{formatTime(team.splash2)}}</td>
      </tr>
      <tr *ngIf="team.splash3 !== '0.00' && team.splash3">
        <td><b>Tussentijd 3</b></td>
        <td>{{formatTime(team.splash3)}}</td>
      </tr>
      <tr *ngIf="team.splash4 !== '0.00' && team.splash1">
        <td><b>Tussentijd 4</b></td>
        <td>{{formatTime(team.splash4)}}</td>
      </tr>
      <tr *ngIf="team.totaltime">
        <td><b>Finishtijd</b></td>
        <td>{{formatTime(finalTime(team.totaltime,team.bonussecond))}}</td>
      </tr>
      <tr *ngIf="team.rower1">
        <td><b>Boeg</b></td>
        <td>{{team.rower1}}</td>
      </tr>
      <tr *ngIf="team.rower2">
        <td><b>2</b></td>
        <td>{{team.rower2}}</td>
      </tr>
      <tr *ngIf="team.rower3">
        <td><b>3</b></td>
        <td>{{team.rower3}}</td>
      </tr>
      <tr *ngIf="team.rower4">
        <td><b>4</b></td>
        <td>{{team.rower4}}</td>
      </tr>
      <tr *ngIf="team.rower5">
        <td><b>5</b></td>
        <td>{{team.rower5}}</td>
      </tr>
      <tr *ngIf="team.rower6">
        <td><b>6</b></td>
        <td>{{team.rower6}}</td>
      </tr>
      <tr *ngIf="team.rower7">
        <td><b>7</b></td>
        <td>{{team.rower7}}</td>
      </tr>
      <tr *ngIf="team.rower8">
        <td><b>Slag</b></td>
        <td>{{team.rower8}}</td>
      </tr>
      <tr *ngIf="team.steername">
        <td><b>Stuur</b></td>
        <td>{{team.steername}}</td>
      </tr>
      <tr *ngIf="team.coachnames">
        <td><b>Coach</b></td>
        <td>{{team.coachnames}}</td>
      </tr>
      <tr *ngIf="team.comments">
        <td><b>Commentaar</b></td>
        <td>{{team.comments}}</td>
      </tr>
      </tbody>
    </table>
    <button md-button (click)="dialogRef.close()">Terug</button>`,
  styles: [`h2 {
            color: #FFF;
            background-color: #000;
            margin:0;
            padding:10px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            }
            table {
                width: auto;
                margin: 30px;
                text-align: left;
            }
            td {
                padding: 5px;
            }
            button {
                float: right;

            }
  `],
  providers: [ Time ],
})

export class TeamComponent { 
    teams: TeamSimpel;
    constructor(private time: Time, public dialogRef: MdDialogRef<any>){ }


    formatTime (time: string) {
        return this.time.formatTime(time);
    }

    finalTime(time : string, bonussecond: string) {
        return this.time.finalTime(time,bonussecond);
    }
}