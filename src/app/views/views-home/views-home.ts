import { Component } from '@angular/core';
import { Statistics } from '../statistics/statistics';
import { Divider } from '../../shared/divider/divider';
import { ItemList } from '../item-list/item-list';

@Component({
  selector: 'app-views-home',
  imports: [Statistics, Divider ,ItemList],
  standalone: true,
  templateUrl: './views-home.html',
  styleUrl: './views-home.css',
})
export class ViewsHome {

  stats: { value: number, label: string }[] = [
    { value: 123, label: '# of users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ]

  items = [
    {
      image: 'couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    {

      image: 'dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in'
    }
  ]

}
