import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Logger } from '../logger.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [Logger]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logger:Logger,private accounts:AccountsService){};

  onSetTo(status: string) {
    this.accounts.updateAccount(this.id,status);
    this.logger.onStatusChange(status);
  }
}
