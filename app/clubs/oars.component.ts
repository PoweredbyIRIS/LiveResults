import { Component, Input } from '@angular/core';
import { TeamSimpel } from './../lastResults/teamSimpel';


@Component({
  selector: 'club-oars',
  template: `<img class="cluboars"
                         src="http://beta.hoesnelwasik.nl/images/cluboars/{{team.clubnameshort.toLowerCase()}}.png"
                         onError="this.src='http://beta.hoesnelwasik.nl/images/cluboars/unkown.png';">`,
  styles: [`.cluboars {
  height: 20px !important;
  width: 48px;
  margin: 5px;
  }`],
})

export class OarsComponent { 
  @Input() team: TeamSimpel;
}