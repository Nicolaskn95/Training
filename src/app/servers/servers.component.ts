import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'testserver';

  constructor() {
    setTimeout(() => {
      this.allowServer = true
    },2000)
  }
ngOnInit(){
}

onCreateServer() {
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
}

onUpdateServerName(event: any) {
  // console.log(event);
  this.serverName = event.target.value
}

}
