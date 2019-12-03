import { Component, EventEmitter, Output } from '@angular/core';
import { Logger } from '../logger.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [Logger],
})
export class NewAccountComponent {
  

  constructor(private logger:Logger, private accountsService:AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    this.logger.onStatusChange(accountStatus);
  }
}
