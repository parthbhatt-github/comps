import { Component } from '@angular/core';
import { Table } from '../table/table';
import { Divider } from '../../shared/divider/divider';

@Component({
  selector: 'app-collection-home',
  standalone: true,
  imports: [Table,Divider],
  templateUrl: './collection-home.html',
  styleUrl: './collection-home.css',
})
export class CollectionHome {
  data = [
    { name: 'John Doe', age: 30, job : 'Engineer', email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 25, job : 'Designer', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', age: 35, job : 'Manager', email: 'bob.johnson@example.com' }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'email', label: 'Email' }
  ];


}
