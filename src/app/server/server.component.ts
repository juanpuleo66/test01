import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['server.component.css']
})
export class ServerComponent implements OnChanges, OnInit, OnDestroy {
    serverId:number = 10;
    serverStatus:string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}

    getserverStatus() {
        return this.serverStatus;
    }

    getBackGroundColor() {
        return this.serverStatus == 'online' ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';
    }
    
    getColor() {
        return this.serverStatus == 'online' ? '#000' : '#FFF'
    }
}