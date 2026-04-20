import { Component } from '@angular/core';
import { Statistics } from '../statistics/statistics';

@Component({
  selector: 'app-views-home',
  imports: [Statistics],
  standalone: true,
  templateUrl: './views-home.html',
  styleUrl: './views-home.css',
})
export class ViewsHome {

  stats: {value: number, label: string}[] = [
    {value: 123, label: '# of users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'},
  ]

}
