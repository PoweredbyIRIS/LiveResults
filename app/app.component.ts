import { Match } from './match';
import { Component, OnInit,Optional } from '@angular/core';
import { TeamService} from './team.service';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import './rxjs-operators';


@Component({
  selector: 'my-app',
  templateUrl: 'app/team-list.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ TeamService ],
})

export class AppComponent {

    wd = new Match(null,null,null,null);
    constructor(private teamService: TeamService){ }

    ngOnInit() { this.getPolling(); }

    getTeams() {
        this.teamService.getTeams()
        .subscribe(
            teams => this.wd = teams
            );
    }

    getPolling() {
        this.teamService.startPolling()
        .subscribe(
            polling => this.getTeams()
            );
    }

}