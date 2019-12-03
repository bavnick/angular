import { Logger } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService{

    constructor(private logger:Logger){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name:string, status:string){
        this.accounts.push({name:name,status:status});
        this.logger.onStatusChange(status);
      }

      updateAccount(id:number, status:string){
        this.accounts[id].status = status;
        this.logger.onStatusChange(status);
      }
}