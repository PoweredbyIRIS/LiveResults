import { Match } from './match';
import { Component, OnInit } from '@angular/core';
import { TeamService} from './team.service';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';



@Component({
  moduleId: module.id,
  selector: 'material2-app-app',
  templateUrl: 'team-list.component.html',
  providers: [ TeamService ],
})
export class TeamListComponent {

    //wd: Match;
    //crews: TeamSimpel[];
    wd = new Match(null,null,null,null);
    constructor(private teamService: TeamService){}

    ngOnInit() { this.getTeams(); }

    getTeams() {
        this.teamService.getTeams()
        .subscribe(
            //teams => this.crews = teams.teams,
            teams => this.wd = teams
            //teams => this.wd = new Match(teams.match,teams.message,teams.error,teams.teams)
            );
    } 
}




