import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverStatus:String = "no server created";
  allowServerCreate:Boolean = false;
  serverName:string = "";
  serverCreated:Boolean = false;
  servers = ['TestServer','TestServer1'];

  constructor() { 
    setTimeout(() => {this.allowServerCreate = true},2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated= true;
    this.serverStatus = "Server is created";
    this.servers.push(this.serverName);
  }

  onServerNameUpdate(event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
