import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:3000/";
    public APIserver: string = 'http://beta.hoesnelwasik.nl/'
    public ApiUrl: string = "api/";
    public ServerWithApiUrl = this.APIserver + this.ApiUrl;
}