import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {

  data = [
    {
      id: 1, name: 'Harshal', AccountNumber: '9743420543', status: 'Success'
    },
    {
      id: 2, name: 'Shefali', AccountNumber: '9743420543', status: 'Success'
    }, {
      id: 2, name: 'Vikas', AccountNumber: '9743420543', status: 'Fail'
    }
  ];

  public searchText: string = '';

  get filteredData() {
    return this.data.filter(Row => {
      Row.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        Row.AccountNumber.toLowerCase().includes(this.searchText.toLowerCase())
    });
  }
}
