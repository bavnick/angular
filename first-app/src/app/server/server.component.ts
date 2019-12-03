import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { read } from 'fs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId:number = 10;
  serverStatus:String = '';
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getStatus(){
    return this.serverStatus;
  }

  getColor(){
    return ( this.serverStatus === 'online' ) ? 'green' : 'red';
  }

}
