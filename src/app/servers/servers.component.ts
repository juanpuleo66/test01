import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core/';
@Component ({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnChanges, OnInit, OnDestroy {
    allowNewServer = true;
    serverCreationStatus = 'No server was created';
    serverName1 = '';
    serverName2 = 'Testserver';
    serverCreated = false;
    servers = ['Testserver1', 'Testserver2'];

    constructor() {
        setInterval( () => {
            this.allowNewServer = !this.allowNewServer;
            this.serverCreationStatus = 'No server was created !'
            console.log('constructor');

        },2000)
    }
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is '+this.serverName2;
        this.servers.push(this.serverName2);
        this.serverCreated = true;
        console.log('onCreateServer')
    }

    onUpdateServerName(event:any) {
        this.serverName1 = (<HTMLInputElement>event.target).value;
    }

    
}