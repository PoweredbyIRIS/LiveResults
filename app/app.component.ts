import { Match } from './match';
import { Component, OnInit,Optional } from '@angular/core';
import { TeamService} from './team.service';
import { MdDialog, MdDialogRef, MdSnackBar, MdTabChangeEvent } from '@angular/material';
import './rxjs-operators';


@Component({
  selector: 'my-app',
  templateUrl: 'app/team-list.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ TeamService ],
})

export class AppComponent {

    private wd = new Match(null,null,null,null);
    matchTeams = [this.wd,this.wd,this.wd,this.wd,this.wd];
    location :number = 1;


    constructor(private teamService: TeamService){ }
    
    ngOnInit() {
      this.getPolling();
      this.getTeams()
    }

     changeLocation(e: MdTabChangeEvent) {
      this.location = e.index + 1;
      this.getTeams()
    }

    private getTeams() {
        this.teamService.getTeams(this.location)
        .subscribe(
            teams => this.matchTeams[this.location-1] = teams
        );
    }

    private getPolling() {
        this.teamService.startPolling()
        .subscribe(
            polling => this.getTeams(),
        );
    }

    

}