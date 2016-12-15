import { Injectable }     from '@angular/core';


@Injectable()
export class Time {
  
  formatTime (time: string) {
      let centiseconds: number = Math.round((+time * 10)%10);
      let seconds: number = Math.floor(+time % 60);
      let minutes: number = Math.floor(+time / 60);
      let timeString: string = '';
      if(centiseconds > 9)
      {
        centiseconds = 0;
        seconds++;
      }
      if (minutes >= 0) timeString += (minutes < 10) ? ('0' + minutes) : (minutes);
      timeString += ":";
      if (seconds >= 0) timeString += (seconds < 10) ? ('0' + seconds) : (seconds);
      timeString += ".";
      timeString += centiseconds;

      return timeString;
  }

  finalTime(time : string, bonussecond: string) {
      if (+time == 0) {
          return 0;
      }
      return +time + +bonussecond;
  }
}