import { TeamSimpel } from './teamSimpel';

export class Match {
    constructor (public match: string,
                   public message: string,
                   public error: string,
                   public teams: TeamSimpel[],
                    ) { }
}